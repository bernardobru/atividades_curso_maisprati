/**
 * Calcula o preço total das maçãs com base na quantidade fornecida
 * - 0.3 para menos que doze maçãs
 * - 0.25 para mais que doze maçãs
 * @param {number} apples Quantidade de maçãs
 * @returns {number} Retorna o preço total das maçãs com base na quantidade delas
 * @throws {TypeError} Se o parâmetro não for um número
 * @example 
 * // Caso 1:
 * applePrices(10);
 * // output: 3.00
 * 
 * // Caso 2:
 * applePrices(15);
 * // output: 3.75
 * 
 * // Caso 3:
 * applePrices(12);
 * // output: 3.00
 */
export default function getApplePricesOf(apples) {
    if (typeof apples !== "number") {
        throw new TypeError("Parâmetro precisa ser um número");
    }
    if (apples < 12) {
        return apples * 0.3; 
    }

    if (apples >= 12) {
        return apples * 0.25;
    }
}