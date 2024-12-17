import readline from "readline-sync";

/**
 * Representa um jogador.
 * @class
 * @example
 * const playerOne = new Player("nome");
 */
export class Player {
    /**
     * Nome do jogador
     * @type {string} 
     * @private 
     */
    #name;

    /** 
     * Jogada do jogador
     * @public 
     * @type {string}
     */
    play

    /**
     * Cria uma instância de Player.
     * @constructor
     * @param {string} name O nome do jogador.
     */
    constructor(name) {
        this.#name = name;
    }

    /**
     * Obtém o nome do jogador.
     * @method
     * @public
     * @returns {string} O nome do jogador.
     */
    getName() {
        return this.#name;
    }

    /**
     * Define a jogada.
     * @method
     * @public
     * @param {string} play - A jogada que o jogador deve realizar.
     * @returns {void}
     */
    setPlay(play) {
        this.play = play;
    }
}

/**
 * Jogo de jokenpô, pede a jogada de dois jogadores e verifica quem ganhou
 * @param {Player} playerOne Jogador um
 * @param {Player} playerTwo Jogador dois
 * @returns {string} Retorna uma mensagem se o jogador um ou o jogador dois venceram, caso de empate, exibe uma mensagem de empate
 * @example
 * // Caso 1:
 * rockPaperScissors(playerOne, playerTwo);
 * // Qual sua jogada <nome de playerOne>?: pedra
 * // Qual sua jogada <nome de playerTwo>: papel
 * // output: <nome do playerTwo> venceu!
 * 
 * // Caso 2:
 * rockPaperScissors(playerOne, playerTwo);
 * // Qual sua jogada <nome de playerOne>?: pedra
 * // Qual sua jogada <nome de playerTwo>: pedra
 * // output: <nome do playerOne> empatou com <nome do playerOne>
 */
export default function rockPaperScissors(playerOne, playerTwo) {
    /**
     * Tipos possíveis de jogadas
     */
    const plays = {
        ROCK: "pedra",
        PAPER: "papel",
        SCISSORS: "tesoura"
    };

    let play;
    play = readline.question(`Qual sua jogada, ${playerOne.getName()}?: `);
    playerOne.setPlay(play);

    play = readline.question(`Qual sua jogada, ${playerTwo.getName()}?: `);
    playerTwo.setPlay(play);

    // Verifica se as jogadas são pedra e tesoura
    if (playerOne.play === plays.ROCK && playerTwo.play === plays.SCISSORS) {
        return `${playerOne.getName()} venceu!`;
    }
    // Verifica se as jogadas são papel e pedra
    if (playerOne.play === plays.PAPER && playerTwo.play === plays.ROCK) {
        return `${playerOne.getName()} venceu!`;
    } 
    // Verifica se as jogadas são tesoura e papel
    if (playerOne.play === plays.SCISSORS && playerTwo.play === plays.PAPER) {
        return `${playerOne.getName()} venceu!`;
    }
    // Verifica se as jogadas são pedra e tesoura
    if (playerTwo.play === plays.ROCK && playerOne.play === plays.SCISSORS) {
        return `${playerTwo.getName()} venceu!`;
    }
    // Verifica se as jogadas são papel e pedra
    if (playerTwo.play === plays.PAPER && playerOne.play === plays.ROCK) {
        return `${playerTwo.getName()} venceu!`;
    } 
    // Verifica se as jogadas são tesoura e papel
    if (playerTwo.play === plays.SCISSORS && playerOne.play === plays.PAPER) {
        return `${playerTwo.getName()} venceu!`;
    }

    return `${playerOne.getName()} empatou com ${playerTwo.getName()}`;
}