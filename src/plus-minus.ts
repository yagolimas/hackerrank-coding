export const plusMinus = (arr: Number[]) => {
    let countNegative = 0, countPositive = 0, countZero = 0
    let sizeArray = arr.length
    arr.forEach(item => {
        if (item > 0) {
            countPositive++
        } else if (item < 0) {
            countNegative++
        } else {
            countZero++
        }
    })
    return {
        positives: Number(countPositive/sizeArray).toFixed(6),
        negatives: Number(countNegative/sizeArray).toFixed(6),
        zeros: Number(countZero/sizeArray).toFixed(6)
    }
}
