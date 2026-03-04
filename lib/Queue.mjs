export default class Queue{
    #data

    constructor(){
        this.#data = []
    }

    //Método de inserção na fila

    enqueue(val){ //Enfileiramento
        this.#data.push(val)
    }

    //Método de remoção na fila
    dequeue(){ //Desfileiramento
        return this.#data.shift() //shift = remove da primeira posição
    }

    //Método para consultar o inicio d fila sem remover algum elemento
    peek(){
        return this.#data[0]
    }

    get isEmpty(){ //Ver se a lista está vazia
        return this.#data.length === 0
    }

    //Método para imprimir a fila (efeitos de depuração)
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }

}