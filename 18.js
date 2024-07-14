//* https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript

var debounce = function(fn, t) {

    let timerId = undefined
    
    return function(...args) {

        clearTimeout(timerId)
        timerId = setTimeout(fn, t, ...args)
        
    }
};