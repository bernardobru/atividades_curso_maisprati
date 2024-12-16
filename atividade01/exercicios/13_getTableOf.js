/**
 * 
 * Retorna a tabuada de um número de 1 até 5
 * @param {number} n Número a ser feita a tabuada
 * @returns {string[]} Retorna um array de strings com as operações da tabuada
 * @example 
 * table(4);
 * // output: [1 * 4 = 4, ..., 5 * 4 = 20];
 */
export default function getTableOf(number) {
    const arrTable = [];
    for (let i = 1; i <= 5; i++) {
        arrTable.push(`${i} * ${number} = ${i * number}`);
    }
    return arrTable;
}