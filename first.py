import random

n= random.randint(1, 100)

a = int(input("Enter a number between 1 and 100: "))
guesses = 1
print(n)
while a != n:
    if a > n:
        print("Too high")


    else:
        print("Too low")
    a = int(input("Enter a number between 1 and 100: "))
    guesses += 1

print("You got it! It took you", guesses, "guesses.")

#python3 first.py

