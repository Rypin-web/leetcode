var compose = function (functions) {
  return function (x) {
    return functions.reverse().reduce((pv,cv)=>{
      pv = cv(pv)
      return pv
    },x)
  }
}

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])
console.log(fn(4))
