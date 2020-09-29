import Navaid from 'navaid'
import { view } from './stores'

import { Landing, Blog, NotFound } from './views'

let router = Navaid()
  .on('/', () => view.set(Landing))
  .on('/blog', () => view.set(Blog))
  .on('*', () => view.set(NotFound))

export default router
