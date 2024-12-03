var filter = function(arr, fn) {
    try{
        return arr.filter((n, i)=>fn(n, i));
    } catch(e){
        return arr
    }
};

console.log(filter([1,2,10,20,30], (n)=>n>10));
console.log(filter([1,2,10,20,30], (n)=>i===1));
console.log(filter([1,2,10,20,30], (n)=>n+10));
