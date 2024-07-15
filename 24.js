//* https://leetcode.com/problems/sort-by/description/

// var sortBy = function(arr, fn) {

//     const newArray = arr.map((e) => {
//         return{
//             v : fn(e),
//             o : e
//         }
//     })

//     return newArray.sort((a, b) => a.v - b.v).map((e) => (e.o))
    
// };

var sortBy = function(arr, fn) {

    return arr.sort((a, b) => (fn(a) - fn(b)))

}