# Path: encrypt.py

from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import base64


mensaje = b'["Carlos", "Carlos123", "carlos@gmail.com", "10/10/1999", "hombre"]'

with open('public_key.pem', 'rb') as archivo:
    clave_publica = RSA.importKey(archivo.read())
    cifrador = PKCS1_OAEP.new(clave_publica)
    mensaje_cifrado = cifrador.encrypt(mensaje)
    mensaje_cifrado = base64.b64encode(mensaje_cifrado)
    
print(mensaje_cifrado)


