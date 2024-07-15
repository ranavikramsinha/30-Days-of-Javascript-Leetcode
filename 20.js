//* https://leetcode.com/problems/is-object-empty/description/

var isEmpty = function(obj) {

    return Object.values(obj).length === 0 ? true : false
    
};