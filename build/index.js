require('dotenv').config()

const { rollup } = require('rollup')
const babel = require('rollup-plugin-babel')
const { uglify } = require('rollup-plugin-uglify')

const getOptions = ({ minify = false } = {}) => {
  const options = {
    input: {
      input: 'src/chorder.js',
      plugins: [
          babel({
              exclude: 'node_modules/**',
              presets: [
                  '@babel/preset-env'
              ]
          })
      ]
    },
    output: {
      file: 'dist/chorder.js',
      format: 'cjs'
    }
  }

  if (minify) {
    options.output.file = 'dist/chorder.min.js'
    options.input.plugins.push(uglify())
  }

  return options
}

async function build() {
  const { input, output } = getOptions()
  //const { input: minifiedInput, output: minifiedOutput } = getOptions({minify: true})

  const bundle = await rollup(input)
  //const minifiedBundle = await rollup(minifiedInput)

  await bundle.write(output)
  //await minifiedBundle.write(minifiedOutput)
}

(async () => {
  await build()

  console.log(`-----------------
Built!`)
})()
