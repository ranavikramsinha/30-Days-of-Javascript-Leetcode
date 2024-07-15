//* https://leetcode.com/problems/flatten-deeply-nested-array/description/

var flat = function (arr, n) {

    if(n === 0){
        return arr
    }
    
    const output = []

    arr.forEach((element) => {
        if(Array.isArray(element)){
            output.push(...flat(element, n-1))
        }
        else{
            output.push(element)
        }
    })

    return output

};