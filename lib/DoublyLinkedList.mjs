class Node{
    constructor(val){
        this.prev = null
        this.data = val
        this.next = null
    }

    
}
export default class DoublyLinkedList{

    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0

    }

    get isEmpty(){
        return this.#count === 0
    }

    get count(){
        return this.#count
    }

    //Método PRIVADO que encontra um nodo por sua posição
    #findNode(pos){
        let node
        if(pos < this.#count / 2){
            node = this.#head
            for(let i = 0; i < pos; i++){
                node = node.next
            }
        }else{
            node = this.#tail
            for(let i = this.#count - 1; i > pos ; i--){
                node = node.prev
            }
        }
        return node;
    }

    insert(pos, val){
        let inserted = new Node(val)

        //1° caso: lista vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted 
        }

        //2° caso:  Inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }

        //3° caso: inserção na último posição
        else if(pos >= this.#count){
            
        }
    }

}

let lista = new DoublyLinkedList