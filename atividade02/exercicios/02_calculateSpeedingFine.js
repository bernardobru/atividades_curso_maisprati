/**
 * Calcula o valor da multa por excesso de velocidade.
 *
 * @param {number} speed - A velocidade do veículo em km/h.
 * @returns {string} Uma mensagem informando se o motorista foi multado e, se sim, o valor da multa.
 * 
 * @example
 * // Caso 1:
 * calculateSpeedingFine(90);
 * // output: Você foi multado! Valor da multa: R$50,00
 * 
 * // Caso 2:
 * calculateSpeedingFine(80);
 * // output: Dentro do limite de velocidade
 */
export default function calculateSpeedingFine(speed) {
    if (speed > 80) {
        return `Você foi multado! Valor da multa: R$ ${(speed - 80) * 5},00`;
    }
    return "Dentro do limite de velocidade"
}