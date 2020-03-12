<script>
  import { Section, Flex, Link } from '@studiobear/designspek-components'
  export let segment
  export let theme = $$props.theme || {}
  import Logo from './Logo.svelte'

  // let src = 'ds-horiz.svg'
  // console.log('Nav: ', Logo)
  $: navStyle = {
    pos: 'fixed',
    t: 0,
    w: '100%',
    zIndex: 100,
    bg: theme.colors.background,
    borderBottom: '1px solid',
    borderColor: theme.colors.primary,
    fontWeight: 300,
    p: '0 1em',
  }
  $: flexStyle = {
    justc: 'space-between',
    align: 'stretch',
    px: '1rem',
    py: '2rem',
  }
  $: flexNavStyle = {
    justc: 'space-around',
    align: 'stretch',
    position: 'relative',
  }
  $: menuLinkStyle = {
    color: theme.colors.primary,
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    px: '1rem',
    mx: '.25rem',
    pt: '.5rem',
    brd: '2px solid',
    brdCol: theme.colors.background,
    _hover: {
      brd: '2px solid',
      brdCol: theme.colors.secondary,
    },
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    brd: '2px solid',
    brdCol: theme.colors.primary,
    _hover: {
      brdCol: theme.colors.secondary,
    },
  }

  $: homeLink = segment === undefined ? menuLinkSelected : menuLinkStyle
  $: aboutLink = segment === 'about' ? menuLinkSelected : menuLinkStyle
  $: blogLink = segment === 'blog' ? menuLinkSelected : menuLinkStyle

  $: logoStyle = {
    w: '220px',
    h: '40px',
    f: theme.colors.primary,
    _hover: {
      f: theme.colors.secondary,
    },
  }
</script>

<Section as="nav" style={navStyle}>
  <Flex dir="row" style={flexStyle}>
    <Link href=".">
      <Logo fill={theme.colors.primary} style={logoStyle} />
    </Link>
    <Flex dir="row" style={flexNavStyle}>
      <Link href="." style={homeLink}>home</Link>
      <Link href="about" style={aboutLink}>about</Link>
      <Link href="blog" style={blogLink}>blog</Link>
    </Flex>
  </Flex>
</Section>
