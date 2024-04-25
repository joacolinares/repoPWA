# Path: decrypt.py

from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from base64 import b64decode

mensaje_cifrado_hex = 'VS9qWUZFcVFTZlJyZXJJVlVieUZsQmxBSjg2YzkxSDd1R0x4ZGIyQS92b0ZEOTBpVUl1S2ZQMytTL2hGK0RQaEU3Q044SnM0MzAzMzhsc3FrdUVQTjNmT0t0dEdMU2NaRHVPVGx0SERRYkh5ZmVGcEJkZUlxTVRhVEt2MnoxeFZjTEdYY0RyWXBxZnhhRHJackhIbFpkbEE5SllKOHBxVERWMzRZUWVDdUxjbHFHb2tySTBvQitLYzRRWHZlaE0vV0xMbWJnV0kxczBlNjJ4cEt2TCs5T2N2ZHpCZjI4UnpPc0ZoVHlGOXoyOVRlUzdUK3ZGdjVFSzR4TlAvaE92REtDQWo3eTF2eExUNmFhV0hZVVdPTmtGcFFodWI0bG1JRVlJWGxEOEc1Tm1LeWxjcFNIMnh1b3ZyUTgvTFJ3NmZBYUxTb0lpdDZOZHdwTlZVME1vQjJnPT0='
# Decodificar el mensaje cifrado de base64
mensaje_cifrado_bg4 = b64decode(mensaje_cifrado_hex)

mensaje_cifrado =b64decode(mensaje_cifrado_bg4)



# Descifrar el mensaje usando la clave privada
with open('private_key.pem', 'rb') as archivo:
    clave_privada = RSA.importKey(archivo.read())
    descifrador = PKCS1_OAEP.new(clave_privada)
    mensaje_descifrado = descifrador.decrypt(mensaje_cifrado)
    print(mensaje_descifrado)
