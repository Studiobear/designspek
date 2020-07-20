const PKG_VERSION = 'PKG_VERSION'
export const version = PKG_VERSION

interface Ping {
  pong: string
}

export const ping = (pong): Ping => {
  return pong
}

type StyleUnits = number | string

export const units = (x: StyleUnits): StyleUnits => {
  return x
}

interface Space {
  units?: StyleUnits | Function
}
