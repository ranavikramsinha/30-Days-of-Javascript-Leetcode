//* https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

var filter = function(arr, fn) {

    let items = []

    arr.forEach((val, index) => {
        if(fn(val, index)){
            items.push(val)
        }
    })

    return items
    
};