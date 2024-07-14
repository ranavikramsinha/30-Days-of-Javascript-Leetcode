//* https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

var timeLimit = function(fn, t) {
    
    return async function(...args) {

        const onSuccess = fn(...args)
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
        })

        return Promise.race([onSuccess, timeoutPromise])
        
    }
}