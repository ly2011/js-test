const assert = require('assert')
const hello = require('../hello')

describe('#hello.js', () => {
  describe('#hello()', () => {
    before(() => {
      console.log('before')
    })
    after(() => {
      console.log('after')
    })
    beforeEach(() => {
      console.log('beforeEach')
    })
    afterEach(() => {
      console.log('afterEach')
    })
    // it('async width done', done => {
    //   (async () => {
    //     try {
    //       const r = await hello()
    //       assert.strictEqual(r, 15)
    //       done()
    //     } catch (err) {
    //       done(err)
    //     }
    //   })()
    // })

    it('#async function', async () => {
      const r = await hello()
      assert.strictEqual(r, 15)
    })
  })
})
