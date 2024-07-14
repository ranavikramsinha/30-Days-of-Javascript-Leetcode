//* https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

var reduce = function(nums, fn, init) {

    let result = init

    nums.length && nums.forEach((num) => {
        result = fn(result, num)
    })

    return result
    
};