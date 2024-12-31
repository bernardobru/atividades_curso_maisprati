/**
 * Da pontos que valem dinheiro com base nas horas de atividade física por mês
 * @param {number} activity Horas de atividade física no mês
 * @returns {number} Quantidade de lucro obtido
 */
export default function calculateGainsFromHealthyLife(activity) {
    if (activity < 10) {
        return (activity * 2) * 0.05;
    }

    if (activity >= 10 && activity <= 20) {
        return (activity * 5) * 0.05;
    }
    
    return (activity * 10) * 0.05;
}