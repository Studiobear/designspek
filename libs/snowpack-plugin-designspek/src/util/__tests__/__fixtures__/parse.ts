export const extracted =
  "  const container = styled(\n    {\n      bg: '#000',\n      color: '#fff',\n    },\n    {},\n  )\n"

export const stringParse =
  "<script>\n  import { styled } from '@studiobear/designspek'\n\n  const container = styled(\n    {\n      bg: '#000',\n      color: '#fff',\n    },\n    {},\n  )\n</script>\n\n<div class={container}>\n  <h3>Designspek</h3>\n</div>\n"

export const stringMultiParse =
  "<script>\n  import { styled } from '@studiobear/designspek'\n\n  const container = styled(\n    {\n      bg: '#000',\n      color: '#fff',\n    },\n    {},\n  )\n\n  const header = styled(\n    {\n      fontSize: '1.5em',\n      color: '#235134',\n    },\n    {},\n  )\n</script>\n\n<div class={container}>\n  <h3 class={header}>Designspek</h3>\n</div>\n"
