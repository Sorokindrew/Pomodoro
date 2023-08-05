export function timeLineArray(time: number): string[] {
    const quantity = Math.floor(time / 25);
    let timesArray = [];
    for (let i=1; i<=quantity; i++) {
        let timeToString = 25 * i; 
        const hours = Math.floor(timeToString / 60);
        const mins = timeToString - hours * 60;
        let timeString = `${hours} ч ${mins} мин`
        if (hours === 0) {
            timeString = `${mins} мин`
        }
        timesArray.unshift(timeString)
    }
    return timesArray;
}