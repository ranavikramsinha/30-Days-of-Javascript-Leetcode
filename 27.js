//* https://leetcode.com/problems/compact-object/description/

var compactObject = function(obj) {

    if(!Boolean(obj)){
        return undefined
    }

    if(typeof obj !== "object"){
        return obj
    }

    if(Array.isArray(obj)){
        const output = obj.map((item) => compactObject(item))
        return output.filter((item) => item !== undefined)
    }

    const output = {}

    for(const key in obj){
        const item = obj[key]
        const result = compactObject(item)

        if(result !== undefined){
            output[key] = result
        }
    }

    return output
    
};