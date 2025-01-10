def calcula_fibonacci(numero):
    fibonacci = [0, 1]
    while fibonacci[-1] < numero:
        fibonacci.append(fibonacci[-1] + fibonacci[-2])
    return fibonacci


def solicitar_numero():
    while True:
        try:
            numero = int(input("Digite um número: "))
            return numero
        except ValueError:
            print("Por favor, insira um número inteiro válido.")


numero = solicitar_numero()
fibonacci = calcula_fibonacci(numero)

if numero in fibonacci:
    print(f"Sequência de Fibonacci até {numero}: {fibonacci}")
    print(f"{numero} pertence à sequência de Fibonacci.")
else:
    print(f"{numero} não pertence à sequência de Fibonacci.")
