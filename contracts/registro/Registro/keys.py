from Crypto.PublicKey import RSA

# Generar el par de claves
clave = RSA.generate(2048)

# Guardar la clave privada en un archivo
with open('private_key.pem', 'wb') as archivo:
    archivo.write(clave.export_key())

with open('public_key.pem', 'wb') as archivo:
    archivo.write(clave.publickey().export_key())
