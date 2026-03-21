import Queue from '../lib/Queue.mjs' 

const fila = [];

fila.push("José");
fila.push("Sérgio");
fila.push("Joaquim");
fila.push("Maria");
fila.push("João");
fila.push("Samuel");
fila.push("Vicente");
fila.push("Terezinha");
fila.push("Firmino");
fila.push("Toninho");
fila.push("Alexandre");

console.log("Fila inicial:");
console.log(fila);

const atendido = fila.shift();//removendo o primeiro 

console.log("\nAtendido:", atendido);
console.log("Fila após atendimento:");
console.log(fila);

fila.push("Rafael");
fila.push("Isabela");
fila.push("Cauã");

console.log("\nFila após novas chegadas:");
console.log(fila);

console.log("\nPróximo a ser atendido:", fila[0]);

fila.shift();// removendo próximo

console.log("\nFila final:");
console.log(fila);