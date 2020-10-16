import path from 'path'
import { promises as fs } from 'fs'
const snowpackPluginDesignspek = require('../index.ts')

describe('snowpack-plugin-mdx', () => {
  it('should compile .svelte file', async () => {
    const filePath = path.join(__dirname, '__fixtures__/Component.svelte')
    const contents = await fs.readFile(filePath, 'utf-8')
    const plugin = snowpackPluginDesignspek({}, {})
    const result = await plugin.load({ contents, filePath })
    expect(result['.js']).toMatchSnapshot('.js')
  })
  it('should find styled function', async () => {
    const filePath = path.join(__dirname, '__fixtures__/Component.svelte')
    const contents = await fs.readFile(filePath, 'utf-8')
    const plugin = snowpackPluginDesignspek({}, {})
    const result = await plugin.load({ contents, filePath })
    const {code} = result.js
    expect(code).toEqual('.js')
  })
})
