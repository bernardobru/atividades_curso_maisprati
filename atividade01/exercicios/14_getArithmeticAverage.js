import readline from "readline-sync";
/**
 * 
 * Recebe valores do usuário e faz a média aritmética da soma deles
 * @returns {number} Retorna a media aritmética dos valores
 */
export default function getArithmeticAverage() {
    let sum = 0;
    let count = 0;
    let number = 1;
    while (number > 0 && number !== null && number !== undefined) {
        number = readline.questionFloat("Valor: ");
        sum += number;
        count++
    }
    return sum / count;
}