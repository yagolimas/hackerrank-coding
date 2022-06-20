import { timeConversion } from '../time-conversion'

test('Testing case (0) with time conversion PM', function() { 
    const inputArray = '07:05:45PM'
    const output = timeConversion(inputArray)
    expect(output).toBe('19:05:45')
})

test('Testing case (1) with time conversion AM', function() { 
    const inputArray = '12:01:00AM'
    const output = timeConversion(inputArray)
    expect(output).toBe('00:01:00')
})

test('Testing case (2) with time conversion AM', function() { 
    const inputArray = '06:40:03AM'
    const output = timeConversion(inputArray)
    expect(output).toBe('06:40:03')
})

test('Testing case (3) with time conversion PM', function() { 
    const inputArray = '12:05:03PM'
    const output = timeConversion(inputArray)
    expect(output).toBe('12:05:03')
})
