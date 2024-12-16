/**
 * Converte uma temperatura em Celsius para Fahrenheit
 * @param {number} degree Temperatura em graus Celsius
 * @returns {number} Temperatura em Fahrenheit
 * @throws {TypeError} Se o argumento não for um número
 * @example
 * celsiusToFahrenheit(32); 
 * // output: 89.6
 */
export default function celsiusToFahrenheit(degree) {
    if (typeof degree !== 'number') {
        throw new TypeError("Parâmetro precisa ser um número.")
    }
    return degree * 1.8 + 32;
}