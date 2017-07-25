// hello.js
const fs = require('mz/fs')

const getFile = async () => {
  const expression = await fs.readFile('./data.txt', 'utf-8')
  const fn = new Function(`return ${expression}`)
  const r = fn()
  console.log(`Calculate: ${expression} = ${r}`)
  return r
}

module.exports = getFile
