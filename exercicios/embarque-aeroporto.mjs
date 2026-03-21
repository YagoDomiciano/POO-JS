import Queue from '../lib/Queue.mjs' 

const filaAeroporto = [];

filaAeroporto.push("Passageiro A");
filaAeroporto.push("Passageiro B");
filaAeroporto.push("Passageiro C");
filaAeroporto.push("Passageiro D");
filaAeroporto.push("Passageiro E");

console.log("Fila antes do embarque:");
console.log(filaAeroporto);

const embarcado1 = filaAeroporto.shift();
console.log("\nEmbarcou:", embarcado1);

console.log("Fila após embarque:");// Fila após remoção
console.log(filaAeroporto);

filaAeroporto.push("Passageiro F");
filaAeroporto.push("Passageiro G");
filaAeroporto.push("Passageiro H");

console.log("\nFila após novos check-ins:");
console.log(filaAeroporto);

console.log("\nPróximo a embarcar:", filaAeroporto[0]);// Próximo passageiro

filaAeroporto.shift();//Chamando próximo passageiro

console.log("\nFila final:");
console.log(filaAeroporto);