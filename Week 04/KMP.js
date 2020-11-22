// KMP search

// pattern ababac /  a   ab  aba  abab  ababa  ababac
// prefixTable   /   0    0   1     2     3       0   

function prefixTable(pattern) {
  const len = pattern.length;
  const table = Array(len).fill(0);
  let i = 1,
    l = 0;

  while (i < len) {
    if (pattern[i] === pattern[l]) {
      ++l; 
      table[i] = l;
      ++i;
    } else {
      if (l > 0) {
        l = table[i];
      } else {
        i++;
      }
    }
  }
  return table;
}

function KMP(tmp, pattern) {
  const table = prefixTable(pattern);
  console.log(table)
  let i = 0,
    l = 0;
  while (i < tmp.length) {
    if (pattern[l] === tmp[i]) {
      l++;
      table[i] = l;
      i++;
    } else {
      if (l > 0) {
        l = table[i];
      } else {
        i++;
      }
    }
    console.log(l, i)
    if (l === pattern.length) {
      return true;
    }
  }
  return false
}


const temp = 'abcacbacb';
// const temp = 'bacb';
const pattern = 'bacb';

console.log(KMP(temp, pattern))