import { plusMinus } from '../plus-minus'

test('Testing case (0) with positives, negatives and zeros', function() { 
    const inputArray = [-4, 3, -9, 0, 4, 1]
    const output = plusMinus(inputArray)
    expect(output.positives).toBe('0.500000')
    expect(output.negatives).toBe('0.333333')
    expect(output.zeros).toBe('0.166667')
})

test('Testing case (1) with positives, negatives and zeros', function() { 
    const inputArray = [1, 1, 0, -1, -1]
    const output = plusMinus(inputArray)
    expect(output.positives).toBe('0.400000')
    expect(output.negatives).toBe('0.400000')
    expect(output.zeros).toBe('0.200000')
})

test('Testing case (2) with positives, negatives and zeros', function() { 
    const inputArray = [1, 1, 0, 1, 1]
    const output = plusMinus(inputArray)
    expect(output.positives).toBe('0.800000')
    expect(output.negatives).toBe('0.000000')
    expect(output.zeros).toBe('0.200000')
})

test('Testing number of decimal places', function() { 
    const inputArray = [-1, -1, 1, 1, 0, 0]
    const output = plusMinus(inputArray)
    expect(output.positives.split('.')[1].length).toBe(6)
    expect(output.negatives.split('.')[1].length).toBe(6)
    expect(output.zeros.split('.')[1].length).toBe(6)
})

test('Testing case without positives numbers', function() { 
    const inputArray = [-1, -1, 0, 0]
    const output = plusMinus(inputArray)
    expect(output.positives).toBe('0.000000')
    expect(output.negatives).toBe('0.500000')
    expect(output.zeros).toBe('0.500000')
})

test('Testing case without zeros', function() { 
    const inputArray = [-1, -1, 1, 1]
    const output = plusMinus(inputArray)
    expect(output.positives).toBe('0.500000')
    expect(output.negatives).toBe('0.500000')
    expect(output.zeros).toBe('0.000000')
})