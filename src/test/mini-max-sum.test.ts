import { miniMaxSum } from '../mini-max-sum'

test('Testing case (0) with sum minimum and maximum ', function() { 
    const inputArray = [396285104, 573261094, 759641832, 819230764, 364801279]
    const output = miniMaxSum(inputArray)
    expect(output.min).toBe(2093989309)
    expect(output.max).toBe(2548418794)
})

test('Testing case (1) with sum minimum and maximum ', function() { 
    const inputArray = [1, 3, 5, 7, 9]
    const output = miniMaxSum(inputArray)
    expect(output.min).toBe(16)
    expect(output.max).toBe(24)
})

test('Testing case (2) with sum minimum and maximum ', function() { 
    const inputArray = [1, 2, 3, 4, 5]
    const output = miniMaxSum(inputArray)
    expect(output.min).toBe(10)
    expect(output.max).toBe(14)
})

test('Testing case (3) with sum minimum and maximum ', function() { 
    const inputArray = [1, 1, 1, 1, 1]
    const output = miniMaxSum(inputArray)
    expect(output.min).toBe(4)
    expect(output.max).toBe(4)
})
