const assert = require('assert')

import {parseHTML} from '../src/parser'

describe('parse html', () => {
  it('<a></a>', function(){
    const tree = parseHTML('<a></a>')
    assert.strictEqual(tree.children[0].tagName, 'a')
    assert.strictEqual(tree.children[0].children.length, 0)
  })
  it('<a href="//baidu.com"></a>', function(){
    const tree = parseHTML('<a href="//baidu.com"></a>')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it('<a href ></a>', function(){
    const tree = parseHTML('<a href ></a>')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it('<a href id ></a>', function(){
    const tree = parseHTML('<a href id ></a>')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it('<a href="abc" id ></a>', function(){
    const tree = parseHTML('<a href="abc" id ></a>')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it('<a id=abc ></a>', function(){
    const tree = parseHTML('<a id=abc ></a>')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it('<a id=abc />', function(){
    const tree = parseHTML('<a id=abc />')
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it("<a id='abc' />", function(){
    const tree = parseHTML("<a id='abc' />")
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it("<a id='", function(){
    assert.throws(()=>{parseHTML("<a id='")}, {
      message: 'This is an eof-in-tag parse error. Emit an end-of-file token.'
    } )
  })

  it("<a id='&", function(){
    assert.throws(()=>{parseHTML("<a id='&")}, {
      message: "Don't support lexical"
    })
  })

  it("<a id= 'abc' />", function(){
    const tree = parseHTML("<a id= 'abc' />")
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

  it("<a id= 'abc' /", function(){
    assert.throws(()=>{parseHTML("<a id= 'abc' /")}, {
      message: "This is an eof-in-tag parse error. Emit an end-of-file token."
    })
  })

  it("<a id= 'abc' /a", function(){
    assert.throws(()=>{parseHTML("<a id= 'abc' /a")}, {
      message: "This is an unexpected-solidus-in-tag parse error. Reconsume in the before attribute name state."
    })
  })

  it("<a id= 'abc'/>", function(){
    const tree = parseHTML("<a id= 'abc'/>")
    assert.strictEqual(tree.children.length, 1)
    assert.strictEqual(tree.children[0].children.length, 0)
  })

});