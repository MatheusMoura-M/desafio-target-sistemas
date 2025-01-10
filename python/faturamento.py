import json

with open("dados.json", "r") as file:
    faturamento = json.load(file)

valores = [dia["valor"] for dia in faturamento if dia["valor"] > 0]
menor = min(valores)
maior = max(valores)
media = sum(valores) / len(valores)

dias_acima_media = len([v for v in valores if v > media])

print(f"Menor valor: {menor}")
print(f"Maior valor: {maior}")
print(f"Dias acima da média: {dias_acima_media}")
