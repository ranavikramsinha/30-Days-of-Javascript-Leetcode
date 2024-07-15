//* https://leetcode.com/problems/chunk-array/description/

var chunk = function(arr, size) {

    const output = []
    const totalRequiredIteration = Math.ceil(arr.length/size)
    let chunk = 0

    while(chunk < totalRequiredIteration){
        if(arr.length > size){
            let data = arr.splice(0, size)
            output.push(data)
        }
        else{
            output.push(arr)
        }

        chunk++
    }

    return output
    
};
