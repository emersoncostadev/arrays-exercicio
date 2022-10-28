
/*Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;*/


const arrayNum = [5,4,8,5,]
const arrayStr = ["emerson","mateus","pedru","cristian"]
const arraySor = [5,"comida",8,true,]

const arrayNumCopia = arrayNum.slice()
const arrayStrCopia = arrayStr.slice()
const arraySorCopia = arraySor.slice()

console.log(arrayNum)
console.log(arrayStr)
console.log(arraySor)

console.log("copia", arrayNumCopia.unshift(8))
console.log("copia", arrayNumCopia)
console.log("copia", arrayStrCopia.pop())
console.log("copia", arrayStrCopia)
console.log("copia", arraySorCopia.splice(1,1))
console.log("copia", arraySorCopia)