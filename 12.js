//* https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

var addTwoPromises = async function(promise1, promise2) {

    //* const num1 = await promise1
    //* const num2 = await promise2

    //* return num1 + num2

    const [num1, num2] = await Promise.all([promise1, promise2])

    return num1 + num2
    
};
