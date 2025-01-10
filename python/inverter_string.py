def inverte_string(string):
    invertida = ""
    for char in string:
        invertida = char + invertida
    return invertida


string = input("Digite uma string: ")
print(f"String invertida: {inverte_string(string)}")
