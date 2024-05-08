export function percentDiff(a, b) {
    return  +(100 * Math.abs( ( a - b ) / ( (a+b)/2 ))).toFixed(2);
}