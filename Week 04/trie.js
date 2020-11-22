const $ = Symbol()
class Trie {
  depth = 0;
  constructor() {
    this.root = Object.create(null);
    this.depth = 0;
  }
  insert(word) {
    let depth = 0;
    let node = this.root;
    for (const s of word) {
      if(!node[s]) {
        node[s] = Object.create(null);
        depth++;
      }
      node = node[s];
    }
    // $ 终止符
    if(!node[$]) {
      node[$] = 0;
    }
    node[$]++;
    this.depth < depth && (this.depth = depth)
  }
  most() {
    let max = 0;
    let maxWord = '';
    const visit = (node, word) => {
      if(node[$] && node[$] > max) {
        max = node[$];
        maxWord = word;
      }
      for (const child in node) {
        visit(node[child], word + child);
      }
    }
    visit(this.root, '');

    return {
      word: maxWord,
      count: max 
    }
  }
}

function makeStrList() {
  const len = 10 + 26 * 2;
  const arr = Array(len);
  for(let i = 0; i < 10 + 26; i++) {
    if(i < 10) {
      arr[i] = String(i);
    } else {
      const c = String.fromCharCode('a'.charCodeAt(0) + i - 10);
      arr[i] = c;
      arr[i + 26] = c.toUpperCase();
    }
  }
  return arr;
}

console.log(makeStrList())

function randomWord(length) {
  const strList = makeStrList();
  const len = strList.length;
  let s = '';

  for(let i = 0; i < length; i++) {
    s += strList[Math.floor(Math.random() * len)];
  }
  return s;
}

const trie = new Trie();
// const str = randomWord(4);
// const str2 = randomWord(3)
// console.log(str, str2)
// trie.insert(str);
// trie.insert(str2);
for(let i=0;i<100000;i++) {
  trie.insert(randomWord(5))
}
console.log(trie, trie.most())
