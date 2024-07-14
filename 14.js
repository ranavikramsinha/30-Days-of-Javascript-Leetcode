//* https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellable = function(fn, args, t) {

    const timeOver = setTimeout(() => fn(...args), t)
    const cancelFn = () => clearTimeout(timeOver)

    return cancelFn
    
};