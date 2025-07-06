import random

n= random.randint(1, 100)
a = -1
guesses = 0

while a != n:
    guesses += 1
    a = int(input("Enter a number between 1 and 100: "))
    if a > n:
        print("you guessed too high")
    else:
        print("you guessed too low")
    a = int(input("Enter a number between 1 and 100: "))
    

print("You got it! It took you", guesses, "guesses.")