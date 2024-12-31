/**
 * Calcula quanto tempo de vida um fumante perdeu
 * @param {number} cigarretesPerDay Quantidade de cigarros por dia
 * @param {number} yearsSmoking Quantidade de anos fumando
 * @return {number} O tempo aproximado de vida perdido em dias
 * @example
 * calculateSmokerLifeLoss(10, 10);
 * // output: 253
 */
export default function calculateSmokerLifeLoss(
  cigarretesPerDay,
  yearsSmoking
) {
  const DAYS_YEAR = 365
  const MINUTES_PER_CIGARRETE = 10
  const MINUTES_IN_DAY = 1440
  return parseInt((cigarretesPerDay * DAYS_YEAR * yearsSmoking * MINUTES_PER_CIGARRETE) / MINUTES_IN_DAY);
}
