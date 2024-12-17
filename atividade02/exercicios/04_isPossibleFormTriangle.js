/**
 * Verifica se é possível formar um triângulo
 * @param {number} a Segmentos de reta 
 * @param {number} b Segmentos de reta 
 * @param {number} c Segmentos de reta 
 * @return {boolean} Retorna `true` se é possível formar um triângulo
 * @example
 * // Caso 1:
 * isPossibleFormTriangle(3, 4, 5);
 * // output true
 * 
 * // Caso 2:
 * isPossibleFormTriangle(1, 2, 3);
 * // output: false
 */
export default function isPossibleFormTriangle(a, b, c) {
    return a < b + c && b < a + c && c < a + b;
}
