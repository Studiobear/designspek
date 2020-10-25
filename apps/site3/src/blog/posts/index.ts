export default {}
/*
import { readdir } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

const readdirP = promisify(readdir)

const cwd = process.cwd()
const POSTS_DIR = join(cwd, 'src/routes/blog/posts/')

export const processPosts = () => async (allFiles = []) => {
  const posts = (await readdirP(POSTS_DIR))
    .filter((fileName) => /\.(md|svx|js)$/.test(fileName))
    .map((f) => join(POSTS_DIR, f))

  const getPosts = await Promise.all(
    posts.map(async (post) => {
      console.log(post)
      return post
    }),
  ).catch(console.error)

  return getPosts
}
export default processPosts
*/
