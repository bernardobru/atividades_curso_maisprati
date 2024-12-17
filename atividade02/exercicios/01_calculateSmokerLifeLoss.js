/**
 * Calcula quanto tempo de vida um fumante perdeu
 * @param {number} cigarretesPerDay Quantidade de cigarros por dia
 * @param {number} yearsSmoking Quantidade de anos fumando
 * @return {number} O tempo aproximado de vida perdido em dias
 * @example
 * calculateSmokerLifeLoss(10, 10);
 * // output: 253
 */
export default function calculateSmokerLifeLoss(cigarretesPerDay, yearsSmoking) {
    return parseInt(cigarretesPerDay * 365 * yearsSmoking * 10 / 1440);
}