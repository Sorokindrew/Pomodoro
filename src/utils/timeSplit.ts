export function timeToTimer(time: number) {
    const min = Math.floor(time / 60);
    const sec = time - min * 60
    const minString = min < 10 ? '0' + min.toString() : min.toString()
    const secString = sec < 10 ? '0' + sec.toString() : sec.toString()
    return minString + ':' + secString
}