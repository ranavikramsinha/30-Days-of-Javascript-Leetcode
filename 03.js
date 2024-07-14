//* https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function(val) {

    return {
        toBe: function(value){
            if(value === val) {
                return true
            }
            else if(value !== val){
                throw "Not Equal"
            }
        },

        notToBe: function(value){
            if(value !== val){
                return true
            }
            else if(value === val){
                throw "Equal"
            }
        }
    }
    
};