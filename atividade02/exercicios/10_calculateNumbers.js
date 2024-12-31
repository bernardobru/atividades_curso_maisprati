import readline from "readline-sync";
const read = readline.question;

/**
 * Faz a soma de todos os elementos do array
 * 
 * @returns {number} A soma de todos os elementos do array
 * 
 * @example
 * array = [1, 2, 3]
 * array.sum() 
 * // output: 6
 */
Array.prototype.sum = function () {
  return this.reduce((acc, act) => acc + act, 0);
};

/**
 * Encontra o menor elemento do array
 * 
 * @returns {number} O menor elemento do array
 * 
 * @example
 * array = [1, 2, 3]
 * array.lower() 
 * // output: 1
 */
Array.prototype.lower = function () {
  return Math.min(...this);
};

/**
 * Faz a média aritmética de todos os elementos do array
 * 
 * @returns {number} A média aritmética dos elementos do array
 * 
 * @example
 * array = [1, 2, 3]
 * array.average() 
 * // output: 2
 */
Array.prototype.average = function () {
  return this.reduce((acc, act) => acc + act, 0) / this.length;
};

/**
 * Contabiliza todos os números pares do array
 * 
 * @returns {number} Quantidade de números pares no array
 * 
 * @example
 * array = [1, 2, 3]
 * array.sum() 
 * // output: 1
 */
Array.prototype.evenNumbers = function () {
  let count = 0;
  this.forEach((val) => {
    if (val % 2 == 0) {
      count++;
    }
  });
  return count;
};

/**
 * Pede ao usuário que informe números até o usuário parar
 * 
 * @returns Retorna um array com os valores pedidos pela questão
 */
export default function readNumbers() {
  const arr = [];
  let number, keep;

  do {
    number = parseInt(read("Digite um numero: "));
    arr.push(number);
    keep = read("Continuar adicionando numeros? ").toLocaleLowerCase();
  } while (keep === "sim");

  return [arr.sum(), arr.lower(), arr.average(), arr.evenNumbers()];
}