// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

pragma solidity ^0.8.0;


contract RegistroEncriptado is Pausable {

    // Variables 

        uint public quantityUsers;

        address payable[] private wallets;

        uint[] private percentages;

        bool public cobro = true; // Variable to enable or disable charging in Register Function

        address private owner; // Variable to store the contract owner's address

        // Variable to store the token address to be used for payment

        IERC20 private token;
        address private tokenDireccion;

        uint256 private precioRegistro = 10 ether;  // Variable to store the registration price in currency


        // Constructor to initialize the contract with parent referrer and vital data 

        constructor(string memory datosCifradosBase64, address _owner, address _tokenDireccion, address payable[] memory _wallets, uint[] memory _percentages) {
            require(_wallets.length == _percentages.length, "Amount of wallets don't match with amount of percentage variables");

            uint totalPorcentaje;

            for (uint i = 0; i < _percentages.length; i++) {
                totalPorcentaje += _percentages[i];
            }

            require(totalPorcentaje == 100, "The total percentage is not 100%");

            wallets = _wallets;
            percentages = _percentages;

            require(_tokenDireccion != address(0), "Invalid token address");
            tokenDireccion = _tokenDireccion;
            token = IERC20(_tokenDireccion);
        /*
            precioRegistro = _precioRegistro; (If you want to pass the registry Price here and not as a variable, just uncomment)
        */
            // Convert the base64 string to bytes

            bytes memory datosCifrados = bytes(datosCifradosBase64);

            // Register the first user as the parent referrer

            usuarios[msg.sender] = Usuario(datosCifrados, address(0));
            direccionesRegistradas[msg.sender] = true;
            
            // Assign the value of the owner's address

            owner = _owner; //[msg.sender]

            // Inicializar quantityUsers con el número de usuarios registrados en el constructor
            quantityUsers = 1;

        }     



        // Structure for storing user data
        struct Usuario {
            bytes datosCifrados; // User data encrypted with the public key
            address referido; // Ethereum address of the user's referrer
        }


        // Mapping to store users by their Ethereum address
        mapping(address => Usuario) public usuarios;

        // Mapping to store whether an address is a registered user or not
        mapping(address => bool) public direccionesRegistradas;

        // Mapping to store if an address posses the role of admin
        mapping(address => bool) public isAdmin;

        // Mapping to store the addresses of users who have an address as their referrer
        mapping(address => address[]) public referidos;


        // Events
        event NuevoUsuarioConPago(address direccion, bytes datosCifrados, address referido, uint256 precio);
        event ReferidoActualizado(address usuario, address nuevoReferido);
        event UsuarioEliminado(address usuario);


        modifier onlyAdmin() {
            require(isAdmin[msg.sender] || msg.sender == owner, "Only Role Admin can call this function");
            _;
        }

        modifier onlyOwner {
            require(msg.sender == owner, "Only the owner can call this function");
            _;
        }



        function registrarUsuarioConPago(string calldata datosCifradosBase64, address referido) public whenNotPaused{
            // Check if the user exists in the registry 
            require(!direccionesRegistradas[msg.sender], "The user already exist in the registry");

            // Check if the referred user exists in the registry
            require(direccionesRegistradas[referido], "The referred user does not exist in the registry");

            // Charge only if the charge variable is enabled
            if (cobro) {
            // Check if the user has approved sufficient amount of tokens for the registration
            require(token.allowance(msg.sender, address(this)) >= precioRegistro, "Insufficient tokens approved for registration");
        
            // Transfer the user's tokens to the contract
            require(token.transferFrom(msg.sender, address(this), precioRegistro), "Could not complete token transfer");

            // Check if the exact amount of tokens required for registration has been transferred
            require(token.balanceOf(address(this)) == precioRegistro,  "The exact amount of tokens required for registration was not transferred");
            }

            // Convert the base64 string to bytes
            bytes memory datosCifrados = bytes(datosCifradosBase64);

            // Store the user data in the mapping
            usuarios[msg.sender] = Usuario(datosCifrados, referido);

            // Mark the address as a registered user
            direccionesRegistradas[msg.sender] = true;

            // Add the user's address to the array of referred users of the referred user
            referidos[referido].push(msg.sender);

            // Transfer the tokens to the wallets
            transferirTokensAwallets();

            // Incrementar la cantidad de usuarios registrados
            quantityUsers++;

            // Emit the event for the creation of a new user with payment
            emit NuevoUsuarioConPago(msg.sender, datosCifrados, referido, precioRegistro);
        }



        // actualmente por user, verificar si solo admin
        function actualizarDatosUsuario(string calldata nuevosDatosCifradosBase64) public whenNotPaused {
            // Check if the user exists in the registry
            require(direccionesRegistradas[msg.sender], "The user does not exist in the registry");

            // Convert the base64 string to bytes
            bytes memory nuevosDatosCifrados = bytes(nuevosDatosCifradosBase64);

            // Update the new data of the user in the mapping 
            usuarios[msg.sender].datosCifrados = nuevosDatosCifrados;
            
        }

        // actualmente por user, verificar si solo admin
        function actualizarReferido(address nuevoReferido) public {
            // Check if the user exists in the registry
            require(direccionesRegistradas[msg.sender], "The user does not exist in the registry");

            // Check if the new referred user exists in the registry 
            require(direccionesRegistradas[nuevoReferido], "The new referred user does not exist in the registry");

            // Update the new referred of the user in the mapping 
            usuarios[msg.sender].referido = nuevoReferido;

            emit ReferidoActualizado(msg.sender, nuevoReferido);

        }


        function eliminarUsuario(address direccion) public onlyAdmin {
            // Check if the user exists in the registry
            require(direccionesRegistradas[direccion], "The user does not exist in the registry");

            // Delete the user of the mapping 
            delete usuarios[direccion];

            // Mark the direction as not registered 
            direccionesRegistradas[direccion] = false;

            // Delete the direction of the user from the array of referreds
            for (uint i = 0; i < wallets.length; i++) {
                address referido = usuarios[direccion].referido;
                address[] storage referidosDelReferido = referidos[referido];
                for (uint j = 0; j < referidosDelReferido.length; j++) {
                    if (referidosDelReferido[j] == direccion) {
                        referidosDelReferido[j] = referidosDelReferido[referidosDelReferido.length - 1];
                        referidosDelReferido.pop();
                        break;
                    }
                }
            }
            quantityUsers--;
            emit UsuarioEliminado(direccion);

        }



         function isUserRegistered(address user) public view returns (bool) {
         return direccionesRegistradas[user];
        }
    
        // Function to get the encrypted data of a user 
        function obtenerDatosCifrados(address direccion) public view returns (string memory) {
            // Check if the user exists in the registry
            require(direccionesRegistradas[direccion], "The user does not exist in the registry");
            // Return the encrypted user data as a base64-encoded string
            return string(abi.encodePacked(Base64.encode(bytes(usuarios[direccion].datosCifrados))));
        }


        // Function to get the referrer of a user
        function obtenerUsuariosPorReferido(address user) public view returns (address[] memory) {
            // Return the array of user addresses who have the given address as their referrer
            return referidos[user];
        }


        // Function to change the token address to use for registration payment
        function cambiarDireccionToken(address nuevaDireccionToken) public onlyAdmin {
            tokenDireccion = nuevaDireccionToken;
        }


        // Function to change the registration price in the token currency.
        function cambiarPrecioRegistro(uint256 nuevoPrecioRegistro) public onlyAdmin {
            precioRegistro = nuevoPrecioRegistro;
        }

        // Function to change the wallets and their percentages
        function cambiarwallets(address payable[] memory nuevaswallets, uint[] memory nuevospercentages) public onlyAdmin {
            require(nuevaswallets.length == nuevospercentages.length, "Amount of wallets does not match with amount of percentage variables");

            uint totalPorcentaje;

            for (uint i = 0; i < nuevospercentages.length; i++) {
                totalPorcentaje += nuevospercentages[i];
            }

            require(totalPorcentaje == 100, "The total percentage is not 100%");

            wallets = nuevaswallets;
            percentages = nuevospercentages;
        }



        // Function to change the state of charging fee in the register function
        function cambiarCobro(bool _cobro) public onlyAdmin {
            cobro = _cobro;
        }


        // Function to transfer the tokens when a user register
        function transferirTokensAwallets() private {
            uint montoTotal = token.balanceOf(address(this));
            for (uint i = 0; i < wallets.length; i++) {
                uint monto = montoTotal * percentages[i] / 100;
                require(token.transfer(wallets[i], monto), "No se pudo transferir tokens a la billetera");
            }
        }

        // Function to view the current wallets and percentages
        function verwallets() public view returns (address payable[] memory, uint[] memory) {
            return (wallets, percentages);
        }

        // Function to view the current token address
        function verDireccionToken() public view returns (address) {
            return tokenDireccion;
        }

        // Function to assign Admin role 
        function asignarAdmin(address billeteraAdmin) public onlyOwner {
            isAdmin[billeteraAdmin] = true;
        }

        // Function to change the owner of the contract 
        function cambiarOwner(address _owner) public onlyOwner {
            owner = _owner;
        }

        // Function to pause the contract 
        function pausarContrato() public onlyOwner {
            _pause();
        }

        // Function to unpause the contract 
        function despausarContrato() public onlyOwner {
            _unpause();
        }


}
