//* https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript

var once = function(fn) {

    let called = false
    
    return function(...args){

        if(!called){
            called = true
            return fn(...args)
        }
        else{
            return undefined
        }
        
    }
};