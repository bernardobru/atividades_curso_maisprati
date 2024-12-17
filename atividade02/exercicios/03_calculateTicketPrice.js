/**
 * Calcula o preço da passagem com base na distância:
 * - R$0,50 por km até 200km
 * - R$0,45 por km acima de 200km
 * @param {number} distance Distância que o passageiro vai percorrer
 * @returns Preço da passagem
 * @example
 * // Caso 1:
 * calculateTicketPrice(200);
 * // output: 100
 * 
 * // Caso 2:
 * calculateTicketPrice(300);
 * // output: 135;
 */
export default function calculateTicketPrice(distance) {
    if (distance <= 200) {
        return distance * 0.5;
    }

    return distance * 0.45;
}
console.log(calculateTicketPrice(300));