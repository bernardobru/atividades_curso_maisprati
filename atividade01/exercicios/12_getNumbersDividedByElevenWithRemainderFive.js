/**
 * Gera um array de números entre 1000 e 1999
 * @returns {number[]} Retorna o array com os números
 * @example
 * generateArrayOfNumbers();
 * // output: [1000, 1001, ..., 1999]
 */
function generateArrayOfNumbers() {
    const arr = [];
    for (let i = 1000; i < 1999; i++) {
        arr.push(i);
    }
    return arr;
}

/**
 * Retorna os números divisíveis por 11 com resto 5 de um array de 1000 a 1999
 * @returns {number[]} Retorna um array com os valores
 * @example
 * dividedByElevenRemainFive();
 * // output: [1006, 1017, ..., 1996]
 */
export default function getNumbersDividedByElevenWithRemainderFive() {
    const arr = generateArrayOfNumbers();
    const newArr = [];
    arr.forEach((a) => {
        if (a % 11 === 5) {
            newArr.push(a);
        } 
    });
    return newArr;
}