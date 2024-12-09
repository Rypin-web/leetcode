
var romanToInt = function(s) {
  const convert = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
  } 
  const arr = s.split('')
  let sum = 0
  arr.map((e, i) => {
    arr[i] = convert[e]
  });
  if(arr.length < 2) return Number(arr.join(''))
    
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i+1]){
      sum += arr[i+1] - arr[i]
      i++
    } else {
      sum += arr[i]
    }
  }
  return sum
};

console.log(romanToInt('MCMXCIV')); //1994
console.log(romanToInt('IV')); //1994
