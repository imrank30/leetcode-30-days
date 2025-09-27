/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function(otherval){
            if(val === otherval){
            return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(otherval){
            if(val !== otherval){
            return true;
            } 
            throw new Error("Equal");
       }
    };
};

function runTest(fn) {
    try {
        return { value: fn() };
    } catch (err) {
        return { error: err.message };
    }
}

console.log(runTest(() => expect(5).toBe(5)));       // { value: true }
console.log(runTest(() => expect(5).toBe(null)));    // { error: "Not Equal" }
console.log(runTest(() => expect(5).notToBe(5)));    // { error: "Equal" }
console.log(runTest(() => expect(5).notToBe(null))); // { value: true }