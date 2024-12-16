import readline from 'readline-sync';
/**
 * 
 * Recebe valores do usuário e faz a média ponderada deles
 * @returns {number} Retorna a média ponderada
 * @example
 * // Exemplo de uso
 * getWeightedAverage
 */
export default function getWeightedAverage() {
    let sum = 0;
    let weigthSum = 0;
    let number = 1;
    let weigth;
    while (number > 0 && number !== null && number !== undefined) {
        number = readline.questionFloat("Valor: ");
        weigth = readline.questionFloat("Peso: ");
        sum += (number * weigth);
        weigthSum += weigth;
    }
    return sum / weigthSum;
}
