//* https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

var promiseAll = function(functions) {

    return new Promise((resolve, reject) => {
        const output = []
        let count = functions.length

        for(let i = 0; i < functions.length; i++){
            functions[i]().then((response) => {
                output[i] = response
                count--

                if(count === 0){
                    return resolve(output)
                }
            }).catch(reject)
        }
    })
    
};