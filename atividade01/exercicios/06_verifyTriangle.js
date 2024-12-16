import isArgsValid from "../isArgsValid.js";

/**
 * Verifica se os valores passados formam um triângulo válido
 * @param {number} a Primeiro valor
 * @param {number} b Segundo valor
 * @param {number} c Terceiro valor
 * @returns {boolean} Retorna true se forma um triângulo válido
 * @example
 * // Caso 1:
 * isTriangle(3, 4, 5);
 * // output: true
 * 
 * // Caso 2:
 * isTriangle(1, 20, 421);
 * // output: false
 */
function isTriangle(a, b, c) {
    return isArgsValid((x) => typeof x === "number", a, b, c) 
    && a < b + c && b < a + c && c < a + b;
}

/**
 * Verifica se os lados formam um triângulo equilátero
 * @param {number} a Primeiro valor
 * @param {number} b Segundo valor
 * @param {number} c Terceiro valor
 * @returns {boolean} Retorna true se todos os lados forem iguais
 * @example
 * // Caso 1:
 * isEquilateral(3, 3, 3);
 * // output: true
 * 
 * // Caso 2:
 * isEquilateral(3, 4, 3);
 * // output: false
 * 
 * // Caso 3: 
 * isEquilateral(3, 4, 5);
 * // output: false
 */
function isEquilateral(a, b, c) {
    return a === b && b === c;
}

/**
 * Verifica se os lados formam um triângulo escaleno
 * @param {number} a Primeiro valor
 * @param {number} b Segundo valor
 * @param {number} c Terceiro valor
 * @returns {boolean} Retorna true se todos os lados forem diferentes
 *  * @example
 * // Caso 1:
 * isScalene(3, 3, 3);
 * // output: false
 * 
 * // Caso 2:
 * isScalene(3, 4, 3);
 * // output: false
 * 
 * // Caso 3: 
 * isScalene(3, 4, 5);
 * // output: true
 */
function isScalene(a, b, c) {
    return a !== b && b !== c && a !== c;
}

/**
 * Verifica o tipo de triângulo com base nos lados fornecidos.
 * @param {number} a - Lado A do triângulo.
 * @param {number} b - Lado B do triângulo.
 * @param {number} c - Lado C do triângulo.
 * @returns {string} O tipo do triângulo: "Equilátero", "Escaleno" ou "Isósceles" ou "Os lados não formam um triângulo válido".
 * @throws {TypeError} Se os parâmetros não forem números.
 * @example 
 * // Caso 1:
 * verifyTriangle(3, 4, 5);
 * // output: Escaleno
 * 
 * // Caso 2:
 * verifyTriangle(3, 4, 3);
 * // output: Isósceles
 * 
 * // Caso 3:
 * verifyTriangle(3, 3, 3);
 * // output: Equilátero
 * 
 */
export default function verifyTriangle(a, b, c) {
    if (!isArgsValid((x) => typeof x === "number", a, b, c)) {
        throw new TypeError("Parâmetros devem ser números");
    }
    
    if (!isTriangle(a, b, c)) {
        return "Os lados não formam um triângulo válido";
    }
    
    if (isEquilateral(a, b, c)) {
        return "Equilátero" 
    }

    if (isScalene(a, b, c)) {
        return "Escaleno";
    }
    
    return "Isósceles";
}