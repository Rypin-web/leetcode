var debounce = function (fn, t) {
  let dateStart = Date.now()
  let timeCall = 0
  return function (...args) {
    let dateCall = Date.now()
    timeCall = dateCall - dateStart
    const timer = setTimeout(() => {
      if (dateCall - dateStart - timeCall < 0) return
      else return fn(...args)
    }, t)
    return timer
  }
}
