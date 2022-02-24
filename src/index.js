module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0) {
    return false;
  }

  let arr = [];	
  let obj = Object.fromEntries(bracketsConfig)
  for (let key of str) {
    let last = arr[arr.length - 1];
    if (key === obj[last]) {
        arr.pop();
    } else {
        arr.push(keys);
    }
  }
  return arr.length === 0;
  // your solution
}
