export const timeConversion = (t) => {
    const period = t.substring(8, 10)
    const time = t.slice(0, 8).split(':')
    if (period === 'PM') {
        time[0] !== '12' && (time[0] = 12 + (+time[0]))
    } else {
        time[0] === '12' && (time[0] = '00')
    }
    return time[0] + ':' + time[1] + ':' + time[2]
}
