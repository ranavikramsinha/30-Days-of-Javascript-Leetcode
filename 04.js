//* https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function(init) {

    let num = init

    return {
        increment: function(){

            return ++num

        },

        decrement: function(){

            return --num

        },

        reset: function(){

            return num = init

        }
    }
    
};