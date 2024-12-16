import argsIsValid from '../isArgsValid.js';
/**
 * Retorna a porcentagem de votos brancos, nulos e válidos com base no número de eleitores
 *
 * @param {number} voters Número de eleitores
 * @param {number} blanks Número de votos brancos
 * @param {number} nulls Número de votos nulos
 * @param {number} valids Número de votos válidos
 * 
 * @returns {object|string} Retorna uma string dizendo que o número de votos e maior que o de eleitores ou um objeto com as porcentagens de cada tipo de voto:
 * - `brancos`: A porcentagem dos votos brancos
 * - `nulos`: A porcentagem dos votos nulos
 * - `validos`: A porcentagem dos votos válidos 
 * 
 * @example
 * voteCount(1000, 125, 125, 750); 
 * // output: {brancos: 12.5, nulos: 12.5, validos: 75}
 */

export default function getPorcentageOfVotes(voters, blanks, nulls, valids) {
    if (!argsIsValid((x) => typeof x === "number", voters, blanks, nulls, valids)) {
        throw new TypeError("Argumentos precisam ser números");
    }

    if (voters < valids + blanks + nulls) {
        return "Número de votos maior que o eleitorado.";
    }

    return {
        brancos: blanks / voters * 100, 
        nulos: nulls / voters * 100, 
        validos: valids / voters * 100, 
    };
}