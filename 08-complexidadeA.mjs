const array = [5,6,7,8,9,2,3,4,1]

function exemplo1(array){
    const inicio = performance.now()
    if (array.length === 0) return null
    const elemento = array[3]
    const fim =  performance.now()

    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024)

    let memoriaTotalMB = "N/A"
    if(typeof process !== "undefined" && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 /1024
    }
    console.clear()
    console.log("--- Analise de complexidade iterativa O(1) ---")
    console.log("Tamanho entrada ", array.length)
    console.log("Resultado ", elemento)
    console.log("Tempo de execução ", fim - inicio, "MS")
    console.log("Memoria estimada da pilha de chamada ", memoriaPilhaMB, " MB")
    console.log("Memoria total usada pelo processo ", 
        typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + " MB" : memoriaPilhaMB)
}

exemplo1(array)

function exemploLogN(n){
    let i = 1
    while (i < n){
        console.log(i)
        i *= 2

    }
}

exemploLogN(10)

function exemploOn(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

const dados = Array(60).fill(9)
exemploOn(array)

function exemploLogN(array){
    array.sort() // é um O(n Log N)
    for(let i=0; i<array.length; i++){

        console.log(array[i])
    }
}

function exemploN_2(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}

function exemplo2_N(n){
    if(n === 0) return 1
    return exemplo2_N(n - 1) + exemplo2_N(n - 1)
}

function factorialIterativo(n){
    let resultado = 1
    for(let i = n; i > 1; i--){
        resultado = resultado * i
    }
}

function fatorialRecursivo(num) {
    if (num === 0) return 1;
    return num * fatorialRecursivo(num - 1);
  }