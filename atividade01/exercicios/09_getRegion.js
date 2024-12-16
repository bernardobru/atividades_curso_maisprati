/**
 * Mostra a região de um produto com base no seu código
 * @param {number} code Código do produto
 * @returns {string} Retorna uma string com a região do produto com base no código passado
 * @throws {TypeError} Se o código não for um número
 * @example
 * // Caso 1: Código 1
 * printRegion(1);
 * // output: "Região Sul"
 * 
 * // Caso 2: Código 2
 * printRegion(2);
 * // output: "Região Norte"
 * 
 * // Caso 3: Código 3
 * printRegion(3);
 * // output: "Região Leste"
 * 
 * // Caso 4: Código 4 
 * printRegion(4);
 * // output: "Região Oeste"
 * 
 * // Caso 5: Código 5 ou 6
 * printRegion(5);
 * // output: "Região Nordeste"
 * printRegion(6);
 * // output: "Região Nordeste"
 * 
 * // Caso 6: Código 7, 8 ou 9
 * printRegion(7);
 * // output: "Região Sudeste"
 * printRegion(8);
 * // output: "Região Sudeste"
 * printRegion(9);
 * // output: "Região Sudeste"
 * 
 * // Caso 7: Código entre 10 e 25
 * printRegion(10);
 * // output: "Região Centro-Oeste"
 * printRegion(25);
 * // output: "Região Centro-Oeste"
 * 
 * // Caso 8: Código entre 25 e 50
 * printRegion(26);
 * // output: "Região Noroeste"
 * printRegion(50);
 * // output: "Região Noroeste"
 * 
 * // Caso 9: Código acima de 50
 * printRegion(51);
 * // output: "Produto Importado"
 */
export default function getRegion(code) {
    if (typeof code !== 'number') {
        throw new TypeError("Parâmetro precisa ser um número");
    }
    
    switch (code) {
        case 1:
            return "Região Sul";
        case 2:
            return "Região Norte";
        case 3:
            return "Região Leste";
        case 4:
            return "Região Oeste";
        case 5: case 6:
            return "Região Nordeste";
        case 7: case 8: case 9:
            return "Região Sudeste";
        default:
            if (code >= 10 && code <= 20) {
                return "Região Centro-Oeste";
            }

            if (code >= 25 && code <= 50) {
                return "Região Noroeste";
            }

            return "Produto Importado";
    }
}
