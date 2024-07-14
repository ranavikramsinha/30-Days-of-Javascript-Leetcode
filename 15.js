//* https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

var cancellable = function(fn, args, t) {

    fn(...args)

    const timeOver = setInterval(() => fn(...args), t)
    const cancelFn = () => clearInterval(timeOver)

    return cancelFn    
};