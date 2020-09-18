import toVfile from 'to-vfile'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import parseFrontmatter from 'remark-parse-yaml'
import excerpt from 'remark-excerpt'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import filter from 'unist-util-filter'
import visit from 'unist-util-visit'
import type { Node } from 'unist'

export const removeFrontmatter = () => async (tree: Node, file) => {
  let getFrontMatter
  await visit(tree, 'yaml', (node) => {
    getFrontMatter = node.data.parsedValue
    return
  })
  file.data.frontmatter = getFrontMatter
  return filter(tree, 'yaml')
}

export const processor = () => async (filepath) => {
  const postParse = await unified().use(markdown)

  const postFM = await postParse()
    .use(frontmatter)
    .use(parseFrontmatter)
    .use(removeFrontmatter)

  const postBody = await postFM()
    .use(remark2rehype)
    .use(stringify)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then((file) => String(file.contents))
    .catch(console.error)

  const postAbstract = await postFM().use(excerpt)

  return postAbstract()
    .use(remark2rehype)
    .use(stringify)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then((file: any) => ({
      title: file.data?.frontmatter?.title ?? 'No title',
      slug: file.data?.frontmatter?.slug ?? '/',
      date: file.data?.frontmatter?.date ?? '',
      html: postBody,
      excerpt: file.contents,
    }))
    .catch(console.error)
}

// For dev use
const unifiedLog = () => (tree, file) => {
  console.log('log:', tree, file)
  return tree
}

export default processor
