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
  const MAX_SPEED = 80
  const FINE_VALUE = 5
  if (speed > MAX_SPEED) {
    return `Você foi multado! Valor da multa: R$ ${(speed - MAX_SPEED) * FINE_VALUE},00`
  }
  return "Dentro do limite de velocidade"
}
