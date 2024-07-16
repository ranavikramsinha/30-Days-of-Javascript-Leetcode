//* https://leetcode.com/problems/array-wrapper/description/

class ArrayWrapper{
    nums = []

    constructor(nums){
        this.nums = nums
    }

    valueOf(){
        return this.nums.reduce((acc, curr) => acc + curr, 0)
    }

    toString(){
        return `[${this.nums.join(",")}]`
    }
}