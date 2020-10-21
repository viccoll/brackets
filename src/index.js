module.exports = function check(str, bracketsConfig) {
  let arr = [];
  bracketsConfig.forEach(el => arr.push(el[0].concat(el[1])));
  let tstr = str, a, m;
  for (let i = 0; i < arr.length; i++) {
      m = arr[i]; a = tstr.replace(m, ''); tstr = a;
  }
  if (tstr === str)  return false;
  else if (tstr === '')  return true;
  else return check(tstr, bracketsConfig);
}
