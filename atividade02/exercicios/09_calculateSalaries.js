/**
 * Calcula o total de salário entre homens e mulheres
 * @param {number[]} manSalaries Salário dos homens
 * @param {number[]} womanSalaries Salário das mulheres
 * @returns {object} Retorna um objeto com duas chaves:
 * - manSalariesTotal: salário total dos homens,
 * - womanSalariesTotal: salário total das mulheres
 * @example
 * calculateSalaries(man, woman);
 * // output: { 
 *      manSalariesTotal: 12346, 
 *      womanSalariesTotal: 12452
 *  }
 */
export default function calculateSalaries(manSalaries, womanSalaries) {
    return {
        manSalariesTotal: manSalaries.reduce(
            (accumulator, current) => accumulator + current, 0).toFixed(2),
        womanSalariesTotal: womanSalaries.reduce(
            (accumulator, current) => accumulator + current, 0)
            .toFixed(2)
    }
}