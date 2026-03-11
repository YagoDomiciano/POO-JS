class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head; //inicio da lista
    #tail; //Final d lista
    #count; //Quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0
    }

    //Getter que retorna a quantidade de elementos da lista

    get count(){
        return this.#count 
    }

    //Metodo para inserir em qualquer posiçõ da lista
    insert(pos, val){
        const inserted = new Node(val)

        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }

        this.#count++
    }


}

