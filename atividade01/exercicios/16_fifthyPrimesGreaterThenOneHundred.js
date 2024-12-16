/**
 * Retorna os 50 números primos maiores que 100
 * @returns {number[]} Retorna um array com números primos
 * @example
 * // Exemplo de uso
 * fifthyPrimeGreaterThatOneHundred();
 * // output: [101, 103, 107, ..., 379]
 */
export default function getFifthyPrimesGreaterThenOneHundred() {
    let count = 0;
    let number = 100;
    const primes = [];
    while (count < 50) {
        number++;
        if (isPrime(number)) {
            primes.push(number);
            count++;
        }
    }

    return primes;
}

/**
 * 
 * Verifica se um número é primo
 * @returns {boolean} Retorna `true` se o número for primo 
 * @example
 * // Caso 1:
 * isPrime(2);
 * // output: true
 * 
 * // Caso 2:
 * isPrime(4); 
 * // output: false
 */
function isPrime(number) {
    let divider = 2;
    while(divider <= Math.sqrt(number)) {
        if (number % divider === 0) {
            return false;
        }
        divider++;
    }
    return true;
}