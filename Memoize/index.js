/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {}
    return function (...args) {
        let key = args.join('_')
        if (cache.hasOwnProperty(key)) {
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key];
    }
}



// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//     return a + b;
// })
// memoizedFn(2, 3) // 5
// console.log(callCount)
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1 
