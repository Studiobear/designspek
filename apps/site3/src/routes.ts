import Navaid from 'navaid'
import { view } from './stores'

import { Landing, NotFound } from './views'

let router = Navaid()
  .on('/', () => view.set(Landing))
  .on('*', () => view.set(NotFound))

export default router
