import Queue from "./Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Esta vazia ?"+ fila.isEmpty())

// inserções na fila
fila.enqueue("Alexandre")
fila.enqueue("Joao")
fila.enqueue("Maria")
fila.enqueue("Cleiton")

console.log(print())

let proximo = fila.peek() 
console.log({proximo})

let atendido = fila.dequeue() // desemfileirar
console.log({atendido})
console.log(fila.print())
proximo = fila.peek
console.log({proximo})


fila.enqueue("Sergio")
console.log(fila.print())