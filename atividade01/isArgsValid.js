/** 
 * Verifica se os argumentos recebidos são válidos
 * @param {(value) => boolean} condition Função callback que implica uma condição para cada elemento dos argumentos
 * @param  {...any} args Argumentos que serão verificados
 * @returns {boolean} Retorna `true` se todos argumentos forem válidos
* @example
* // Com números
* isArgsValid((x) => x < 0, a, b, c, d);
* 
* // Com strings
* isArgsValid((x) => x.trim().length > 0 , a, b, c, d);
 */
export default function isArgsValid(condition, ...args) {
    return args.every(condition);
}
