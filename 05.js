//* https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

var map = function(arr, fn) {

    let newArr = []

    arr.forEach ((val, index) => {
        newArr.push(fn(val, index))
    })

    return newArr
    
};