//* https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript

var compose = function(functions) {
    
    return function(x) {

        let result = x

        for(let i = functions.length - 1; i >= 0; i--){
            result = functions[i](result)
        }

        return result
        
    }
};