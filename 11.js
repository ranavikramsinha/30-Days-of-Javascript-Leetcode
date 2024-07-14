//* https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

function memoize(fn) {

    const cache = {}
    
    return function(...args) {

        const key = args

        if(key in cache){
            return cache[key]
        }

        const output = fn(...args)
        cache[key] = output

        return output
        
    }
}