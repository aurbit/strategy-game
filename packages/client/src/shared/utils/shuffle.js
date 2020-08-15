const colors = require('./colors.js')
const fs = require('fs')

async function shuffle () {
  const newColors = await colors.sort(() => {
    return 0.5 - Math.random()
  })

  const onlyHex = await newColors.map(c => `'${c.code.hex}'`)

  fs.writeFile('colors2.js', `export default [${onlyHex}]`, function (err) {
    if (err) return console.log(err)
    console.log('done')
  })
}

shuffle()
