// asd*da

function find(tmp, pattern) {
  let starCount = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      starCount++;
    }
  }

  if (starCount === 0) {
    for (let i = 0; i < tmp.length; i++) {
      if (pattern[i] !== tmp[i] && pattern[i] !== '?') {
        return false;
      }
    }
    return;
  }

  let i = 0,
    last = 0;
  for (; pattern[i] !== '*'; i++) {
    if (pattern[i] !== tmp[i] && pattern[i] !== '?') return false;
  }

  last = i;

  for (let p = 0; p < starCount-1; p++) {
    i++;
    let sub = '';
    while(pattern[i] !== '*') {
      sub += pattern[i] 
      i++
    }
    let reg = new RegExp(sub.replace(/\?/g, '[\\S\\s]', 'g'));
    reg.lastIndex = last;
    if(!reg.exec(tmp)) return false;
    last = reg.lastIndex
  }

  for(let j = 0; j<= tmp.length - last && pattern[pattern.length - j] !== '*'; j++) {
    if(pattern[pattern.length - j] !== tmp[tmp.length - j] &&
      pattern[pattern.length - j] !== '?') {
        return false;
    }
  }
  return true;
}
console.log(find('abcacbd', 'ab*c*d'))