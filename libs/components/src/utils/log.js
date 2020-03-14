import debug from 'debug'

const DEFAULT_COLORS = {
  trace: 'lemonchiffon',
  info: 'cornflowerblue',
  warn: 'deeppink',
  error: 'crimson',
}

export const Log = (name = 'logger', COLORS = DEFAULT_COLORS) => {
  const message = (level, message, source) => {
    const namespace = `${name}:${level}`
    const createDebug = debug(namespace)

    createDebug.color = COLORS[level]

    if (source) {
      createDebug(source, message)
    } else {
      createDebug(message)
    }
  }

  return Object.freeze({
    trace: (m, s) => message('trace', m, s),
    info: (m, s) => message('info', m, s),
    warn: (m, s) => message('warn', m, s),
    error: (m, s) => message('error', m, s),
  })
}

export default Log
