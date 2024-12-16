import fn01 from "./exercicios/01_celsiusToFahrenheit.js";
import fn02 from "./exercicios/02_getPorcentageOfVotes.js";
import fn03 from "./exercicios/03_mathOperationsOnFourIntegers.js";
import fn04 from "./exercicios/04_arithmeticAverageWithoutElse.js";
import fn05 from "./exercicios/05_arithmeticAverageWithElse.js";
import fn06 from "./exercicios/06_verifyTriangle.js";
import fn07 from "./exercicios/07_getApplePricesOf.js";
import fn08 from "./exercicios/08_orderByAscending.js";
import fn09 from "./exercicios/09_getRegion.js";
import fn10 from "./exercicios/10_printIntegerTenTimes.js";
import fn11 from "./exercicios/11_isOddOrEven.js";
import fn12 from "./exercicios/12_getNumbersDividedByElevenWithRemainderFive.js";
import fn13 from "./exercicios/13_getTableOf.js";
import fn14 from "./exercicios/14_getArithmeticAverage.js";
import fn15 from "./exercicios/15_getWeightedAverage.js";
import fn16 from "./exercicios/16_fifthyPrimesGreaterThenOneHundred.js"
import readline from "readline-sync";

// Alias para o método console.log();
const log = console.log;

/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec01(fn) {
    log("Exercício 1: Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.");
    let degree = readline.questionFloat("Digite uma temperatura em Celsius: ");
    log(fn(degree));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec02(fn) {
    log("Exercício 2: Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.");
    let voters = parseInt(readline.question("Digite o numero de eleitores: "));
    let blanks = parseInt(readline.question("Digite o numero de votos brancos: "));
    let nulls = parseInt(readline.question("Digite o numero de votos nulos: "));
    let valids = parseInt(readline.question("Digite o numero de votos validos: "));
    log(fn(voters, blanks, nulls, valids));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec03(fn) {
    log("Exercicio 3:  Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: \nSome 25 ao primeiro inteiro; \nTriplique o valor do segundo inteiro; \nModifique o valor do terceiro inteiro para 12% do valor original; \nArmazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros");
    let first = readline.questionInt("Digite um numero: ");
    let second = readline.questionInt("Digite um numero: ");
    let third = readline.questionInt("Digite um numero: ");
    let forth = readline.questionInt("Digite um numero: ");
    log(fn(first, second, third, forth));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec04(fn) {
    log("Exercicio 4: Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).");
    let n1 = readline.questionInt("Digite um numero: ");
    let n2 = readline.questionInt("Digite um numero: ");
    log(fn(n1, n2));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec05(fn) {
    log("Exercício 5: Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0");
    let n1 = readline.questionInt("Digite um numero: ");
    let n2 = readline.questionInt("Digite um numero: ");
    log(fn(n1, n2));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec06(fn) {
    log("Exercício 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.");
    let a = readline.questionInt("Digite um lado: ");
    let b = readline.questionInt("Digite um lado: ");
    let c = readline.questionInt("Digite um lado: ");
    log(fn(a, b, c));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec07(fn) {
    log("Exercício 7: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.");
    let apples = readline.questionInt("Digite quantas macas quer: ");
    log(fn(apples));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec08(fn) {
    log("Exercício 8: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.")
    let n1 = readline.questionInt("Digite um numero: ");
    let n2 = readline.questionInt("Digite um numero: ");
    log(fn(n1, n2));
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec09(fn) {
    log("Exercício 9: Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:");
    console.table([
        { Codigo: "1", Regiao: "Sul" },
        { Codigo: "2", Regiao: "Norte" },
        { Codigo: "3", Regiao: "Leste" },
        { Codigo: "4", Regiao: "Oeste" },
        { Codigo: "5 ou 6", Regiao: "Nordeste" },
        { Codigo: "7, 8 ou 9", Regiao: "Sudeste" },
        { Codigo: "10 até 20", Regiao: "Centro-Oeste" },
        { Codigo: "25 até 50", Regiao: "Nordeste" },
        { Codigo: "Fora desses intervalos", Regiao: "Produto Importado" }
    ]);
    let code = readline.questionInt("Digite o codigo do produto: ");
    log(fn(code))
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec10(fn) {
    log("Exercício 10: Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.");
    let number = readline.questionInt("Digite um numero: ");
    fn(number); 
}
/**
 * Executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec11(fn) {
    log("Exercício 11: Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.");
    fn(); 
}
/**
 * Executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec12(fn) {
    log("Exercício 12: Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.");
    log(fn());
}
/**
 * Lê entradas do usuario e executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec13(fn) {
    log("Exercício 13:  Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: \n1 x N = N \n2 x N = 2N \n3 x N = 3N");
    let number = readline.questionInt("Digite um numero: ");
    fn(number).forEach(str => log(str));
}
/**
 * Executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec14(fn) {
    log("Exercício 14: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.");
    log(fn());
}
/**
 * Executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec15(fn) {
    log("Exercício 15: Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.");
    log(fn());
}
/**
 * Executa a função passada
 * @param {Function} fn Função a ser executada 
 */
function exec16(fn) {
    log("Exercício 16: Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.")
    log(fn());
}

/**
 * O usuário escolhe quais dos dezesseis exercicios executar entre 1 e 16 e 0 para parar a execução
 */
function main() {
    let fn;
    do {
        fn = readline.questionInt("Escolha qual funcao executar (1 ate 16 - seleciona uma funcao | 0 - sai do programa): ");
        switch(fn) {
            case 1:
                exec01(fn01);
                break;
            case 2:
                exec02(fn02);
                break;
            case 3:
                exec03(fn03);
                break;
            case 4:
                exec04(fn04);
                break;
            case 5:
                exec05(fn05);
                break;
            case 6:
                exec06(fn06);
                break;
            case 7:
                exec07(fn07);
                break;
            case 8:
                exec08(fn08);
                break;
            case 9:
                exec09(fn09);
                break;
            case 10:
                exec10(fn10);
                break;
            case 11:
                exec11(fn11);
                break;
            case 12:
                exec12(fn12);
                break;
            case 13:
                exec13(fn13);
                break;
            case 14:
                exec14(fn14);
                break;
            case 15:
                exec15(fn15);
                break;
            case 16:
                exec16(fn16);
                break;
            default:
                break;
        }
    } while(fn !== 0);
}

main();