import readline from "readline-sync"
function playerFactory(name) {
  return {
    name,
    play: null,
  }
}

/**
 * Jogo de jokenpô, pede a jogada de dois jogadores e verifica quem ganhou
 * @param {object} playerOne Jogador um
 * @param {object} playerTwo Jogador dois
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
    SCISSORS: "tesoura",
  }

  let play
  play = readline
    .question(`Qual sua jogada, ${playerOne.name}?: `)
    .toLocaleLowerCase()
  playerOne.play = play

  play = readline
    .question(`Qual sua jogada, ${playerTwo.name}?: `)
    .toLocaleLowerCase()
  playerTwo.play = play

  // Verifica se as jogadas são pedra e tesoura
  if (playerOne.play === plays.ROCK && playerTwo.play === plays.SCISSORS) {
    return `${playerOne.name} venceu!`
  }
  // Verifica se as jogadas são papel e pedra
  if (playerOne.play === plays.PAPER && playerTwo.play === plays.ROCK) {
    return `${playerOne.name} venceu!`
  }
  // Verifica se as jogadas são tesoura e papel
  if (playerOne.play === plays.SCISSORS && playerTwo.play === plays.PAPER) {
    return `${playerOne.name} venceu!`
  }
  // Verifica se as jogadas são pedra e tesoura
  if (playerTwo.play === plays.ROCK && playerOne.play === plays.SCISSORS) {
    return `${playerTwo.name} venceu!`
  }
  // Verifica se as jogadas são papel e pedra
  if (playerTwo.play === plays.PAPER && playerOne.play === plays.ROCK) {
    return `${playerTwo.name} venceu!`
  }
  // Verifica se as jogadas são tesoura e papel
  if (playerTwo.play === plays.SCISSORS && playerOne.play === plays.PAPER) {
    return `${playerTwo.name} venceu!`
  }

  return `${playerOne.name} empatou com ${playerTwo.name}`
}
