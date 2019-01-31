require('dotenv').config()

const { rollup } = require('rollup')
const babel = require('rollup-plugin-babel')
const { uglify } = require('rollup-plugin-uglify')

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

process.env.env === 'prod' ? (options.input.plugins.push(uglify())) : null

async function build() {
    const bundle = await rollup(options.input)

    await bundle.write(options.output)
}

(async () => {
    await build()

    console.log(`-----------------
Built!
Dist: ${options.output.file}`)
})()
