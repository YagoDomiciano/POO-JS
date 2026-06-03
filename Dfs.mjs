import Stack from "./lib/Stack.mjs";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

//Implementação da busca em profundidade

function dfs(grafos, inicio){

    //Set é uma estrutura de dados nativa do JS como array, mas com duas regras: 
    //1° Ele não permite elementos duplicados
    //2° Uma busca instantanea com o motodo .has()
    const visitados = new Set()

    const pilha = new Stack()

    pilha.push(inicio)

    while(pilha.isEmpty){
        const no = pilha.pop()

        if(!visitados.has(no)){
            console.log(no)
            visitados.add(no)

            const vizinhos = grafo(no)

            for(let i = vizinhos.length - 1; i >= 0; i++){
                if(visitados.has(vizinhos[i])){
                    pilha.push(vizinhos[i]) 
                }
            }
        }
    }
}
dfs(grafo, "A")