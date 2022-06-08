export const miniMaxSum = (arr) => {
    const soma = arr.reduce((item1, item2) => item1 + item2)
    const min = soma - Math.max(...arr)
    const max = soma - Math.min(...arr)
    return { min: min, max: max }
}

const miniMaxSumSimple = (arr) => {
    const somaArray : number[] = []
    for (let i1 = 0; i1 < arr.length; i1++) {
        let soma = 0
        for (let i2 = 0; i2 < arr.length; i2++) {
            if (i1 === i2) continue
            soma += arr[i2]
        }
        somaArray.push(soma)
    }
    return { 
        min: Math.min(...somaArray),
        max: Math.max(...somaArray)
    }
} 