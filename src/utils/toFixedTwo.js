module.exports = (num) => {
  if(!num) return 0
  return num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
}