/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

    */

import Queue from '../lib/Queue.mjs' 

const filaBanco = new Queue()

filaBanco.enqueue(101)
filaBanco.enqueue(102)
filaBanco.enqueue(103)
filaBanco.enqueue(104)
filaBanco.enqueue(105)

console.log("Fila inicial:")
console.log(filaBanco.print())
console.log("")

const atendido = filaBanco.dequeue() //atende o primeiro cliente
console.log("Cliente atendido:", atendido)
console.log("")

console.log("Fila após atendimento:")
console.log(filaBanco.print())
console.log("")

filaBanco.enqueue(106)
filaBanco.enqueue(107)

console.log("Fila após novos clientes:")
console.log(filaBanco.print())
console.log("")

console.log("Próximo cliente:", filaBanco.peek()) //próximo cliente
console.log("------------------")

const proximo = filaBanco.dequeue()//atender próximo cliente
console.log("Atendido agora:", proximo)

console.log("Fila final:")
console.log(filaBanco.print())