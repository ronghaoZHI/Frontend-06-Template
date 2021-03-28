const assert = require('assert')

import {add, mul} from '../src/index'

describe('add function testing', () => {
  it('1+2 should be 3', function(){
    assert.strictEqual(add(1, 2), 3)
  })
  it('-5+2 should be 3', function(){
    assert.strictEqual(add(-5, 2), -3)
  })

  it('-5*2 should be -10', function(){
    assert.strictEqual(mul(-5, 2), -10)
  })
});