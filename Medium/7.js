var reverse = function (x) {
  const answer =
    x < 0
      ? Number('-' + String(Math.abs(x)).split('').reverse().join(''))
      : Number(String(x).split('').reverse().join(''))
  return answer > 2147483647 || answer < -2147483648 ? 0 : answer
}

console.log(reverse(1534236469))
