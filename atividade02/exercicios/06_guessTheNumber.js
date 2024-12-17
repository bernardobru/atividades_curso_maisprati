import readline from 'readline-sync';

/**
 * Jogo de adivinhação, o usuário precisa adivinhar um número aleatório entre 1 e 5
 * @returns O número adivinhado
 * @example 
 * guessTheNumber();
 * // Adivinhe o numero (1 - 5): 2
 * // Adivinhe o numero (1 - 5): 3
 * // output: 3
 */
export default function guessTheNumber() {
    const number = Math.round(Math.random() * 5);
    let guess;
    
    do {
        guess = readline.questionInt("Adivinhe o numero (1 - 5): ");
    } while(guess !== number)

    return guess;
}
