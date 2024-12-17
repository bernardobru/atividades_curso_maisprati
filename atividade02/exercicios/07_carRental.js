/**
 * Calcula o preço do aluguel de um carro com base no seu tipo
 * @param {string} car Tipo do carro
 * @param {number} days Dias alugado
 * @param {number} km Kilometros rodados
 * @returns {number|string} Preço total do aluguel ou uma mensagem caso o tipo do carro não seja válido
 * @example 
 * // Caso 1:
 * calculateCarRental("luxo", 10, 200);
 * // output: 1560
 * 
 * // Caso 2:
 * calculateCarRental("luxo", 10, 250);
 * // output: 1562.5
 * 
 * // Caso 3:
 * calculateCarRental("popular", 10, 100);
 * // output: 920
 * 
 * // Caso 4:
 * calculateCarRental("popular", 10, 150);
 * // output: 915
 * 
 * // Caso 5:
 * calculateCarRental("suv", 10, 150);
 * // output: suv não é um carro válido!
 * 
 * 
 */
export default function calculateCarRental(car, days, km) {
    /**
     * Tipos possíveis de carro
     */
    const CarType = {
        DELUXE: "luxo",
        POPULAR: "popular"
    };

    if (car === CarType.POPULAR) {
        if (km <= 100) {
            return days * 90 + km * 0.2;
        } else {
            return days * 90 + km * 0.1;
        }
    }

    if (car === CarType.DELUXE) {
        if (km <= 200) {
            return days * 150 + km * 0.3;
        } else {
            return days * 150 + km * 0.25;
        }
    }

    return `${car} não é um carro válido!`
}
console.log(calculateCarRental("popular", 10, 150));
