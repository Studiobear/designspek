const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const main = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  typography: {
    fonts: {
      body:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    baseFontSize: '20px',
    baseLineHeight: 1.62,
    scaleRatio: 1.68,
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 2,
    },
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    highlight: '#d2d2da',
    modes: {
      dark: {
        text: '#fff',
        background: '#060606',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        antialias: true,
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      boxSizing: 'border-box',
    },
    html: { scrollBehavior: 'smooth' },
    body: {
      antialias: true,
      reset: true,
      m: 0,
    },
    h1: {
      ...heading,
      fontSize: 5,
      py: '0.5rem',
      color: 'primary',
    },
    h2: {
      ...heading,
      fontSize: 4,
      color: 'secondary',
    },
    h3: {
      ...heading,
      fontSize: 3,
      color: 'secondary',
    },
    h4: {
      ...heading,
      fontSize: 2,
      color: 'text',
    },
    h5: {
      ...heading,
      fontSize: 1,
      color: 'primary',
    },
    h6: {
      ...heading,
      fontSize: 0,
      color: 'secondary',
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      fontFamily: 'body',
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      fontFamily: 'body',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
      fontFamily: 'body',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default main
