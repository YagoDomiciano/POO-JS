/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from '../lib/Stack.mjs'

const torreA = new Stack()
const torreB = new Stack()
const torreC = new Stack()

torreB.push(4)
torreB.push(3)
torreB.push(2)
torreB.push(1)

console.log("Antes: ")
console.log("Torre A:", torreA.print())
console.log("Torre B:", torreB.print())
console.log("Torre C:", torreC.print())

function movimentos(){
    const anel4 = torreB.peek()
    torreC.push(anel4) //colocou o anel 4 na torre c
    torreB.pop() //Tirou o anel 4 da torre B
    const anel3 = torreB.peek()
    torreB.pop() //Tirou o anel 3 da torre B
    torreA.push(anel3) //Colocou o anel 3 na torre A
    torreC.pop() // tirou o anel 4 da torre C
    torreA.push(anel4) // Colocou o anel 4 na torre A
    const anel2 = torreB.peek()
    torreB.pop() // tirou o anel 2 da torre B
    torreC.push(anel2) //Colocou o anel 2 na torre C
    torreA.pop() // tirou o anel 4 da torre A
    torreB.push(anel4) //Colocou o anel 4 na torre B
    torreA.pop() // tirou o anel 3 da torre A
    torreC.push(anel3) //Coloca o anel 3 na torre C
    torreB.pop() // tira o anel 4 da torre B
    torreC.push(anel4) // Adiciona anelç 4 na torre C
    const anel1 = torreB.peek()
    torreB.pop() //Tirou o anel 1 da torre B
    torreA.push(anel1) //adiciona o anel 1 na torre A
    torreC.pop() //Tira o anel 4 da torre C
    torreA.push(anel4) //Coloca o anel 4 na torre A
    torreC.pop() // Retira o anel 3 da torre C
    torreB.push(anel3) //Adiciona o anel 3 na torre B
    torreA.pop()//Retira o anel 4 da torre A
    torreB.push(anel4) // Coloca o anel 4 na torre B
    torreC.pop() //Retira o anel 2 da torre C
    torreA.push(anel2) //Coloca o anel 2 na torre A
    torreB.pop() //retira o anel 4 da torre B
    torreC.push(anel4)
    torreB.pop() //Retira o anel 3 da torre B
    torreA.push(anel3) //Coloca o anel 3 na torre A
    torreC.pop() // Retira o anel 4 da torre C
    torreA.push(anel4) // Adiciona o anel 4 na torre A
}


movimentos()
console.log("Depois: ")
console.log("Torre A:", torreA.print())
console.log("Torre B:", torreB.print())
console.log("Torre C:", torreC.print())