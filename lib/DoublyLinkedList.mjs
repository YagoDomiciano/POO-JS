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
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted
        }

        else{
            let nodePos = this.#findNode

            let before = nodePos.prev

            before.next = inserted

            inserted.prev = before

            inserted.next = nodePos

            nodePos.prev = inserted
        }

        this.#count++
    }

    insertHead(val){
        this.insert(0, val)
    }

    insertTail(val){
        this.insert(this.#count, val)
    }

    remove(pos){
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){return undefined}

        let removed

        if(pos === 0){ // remover posição 0
            removed = this.#head
            this.#head = removed.next
            if(this.#head){
                this.#head.prev = null
            }
            if(this.#count === 1){
                this.#tail = null
            }
        }
        else if(pos === this.#count - 1){ //Remover o tail
            removed = this.#tail
            this.#tail = removed.prev
            if(this.#tail){
                this.#tail.next = null
            }
            if(this.#count === 1){
                this.#head = null
            }
        }
        else{ // Remover posição intermediaria

            removed = this.#findNode
            let before = removed.prev
            let after = removed.next

            before.next = after
            after.prev = before
        }
        this.#count++

        return removed.data
    }

    removeHead(){
        return this.remove(0)
    }

    removeTail(){
        return this.remove(this.#count - 1)
    }

    peak(pos){
        
    }

}

let lista = new DoublyLinkedList