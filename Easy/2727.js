var isEmpty = function(obj) {
    return Object.keys(obj).length === 0
};

console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));
console.log(isEmpty(["x", 5, "y", 42]));
