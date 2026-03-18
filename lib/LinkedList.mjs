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

        //Inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }

        //Inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //Inserção em uma posição intermediaria 
        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before =  before.next
            }
            let after = before.next

            inserted.next = after
            
            before.next = inserted
        }

        this.#count++
    }
    

    // ↓ Como fica na teoria a memória ↓
    // lista{
    //     data: x 
    //     next: {
    //         data: y 
    //         next: {
    //             data: z
    //             next: null
    //         }
    //     }
    // }

    //Método para inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0,val)
    }
    insertTail(val){
        this.insert(this.#count, val)
    }
    remove(pos){
        //1° caso = excessões
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined;
        }
        let remove
        //2° Caso = Apagar o Head
        if(pos === 0){
            
        }
    }

}

