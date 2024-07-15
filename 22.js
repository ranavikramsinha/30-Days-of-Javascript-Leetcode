//* https://leetcode.com/problems/array-prototype-last/description/

Array.prototype.last = function() {

    return this.length ? this[this.length - 1] : -1
    
};