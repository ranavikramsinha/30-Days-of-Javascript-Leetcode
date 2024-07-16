//* https://leetcode.com/problems/calculator-with-method-chaining/description/

class Calculator {

    output = 0
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.output = value    
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.output += value
        return this 
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.output -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.output *= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {

        if(value === 0){
            throw "Division by zero is not allowed"
        }
        this.output /= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.output **= value
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.output
    }
}