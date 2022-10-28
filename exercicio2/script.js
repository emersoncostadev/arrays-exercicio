/*Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. */

const arrayNum = [5,4,8,5,]
const arrayStr = ["emerson","mateus","pedru","cristian"]
const arraySor = [5,"comida",8,true,]

console.log(arrayNum.length)
console.log(arrayStr.length)
console.log(arraySor.length)

console.log(arrayNum[0])
console.log(arrayStr[1])
console.log(arraySor[2])

console.log(arrayNum.includes(4))
console.log(arraySor.includes("casa"))


//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";