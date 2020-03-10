<script>
  import { Section, Flex, Box, Link } from '@studiobear/designspek-components'
  export let segment
  export let theme = $$props.theme || {}
  import Logo from './Logo.svelte'

  // let src = 'ds-horiz.svg'
  // console.log('Nav: ', Logo)
  $: navStyle = {
    borderBottom: '1px solid',
    borderColor: theme.colors.primary,
    fontWeight: 300,
    p: '0 1em',
    theme: theme,
  }
  $: flexStyle = {
    justc: 'space-between',
    align: 'stretch',
    px: '1rem',
    py: '2rem',
    theme: theme,
  }
  $: flexNavStyle = {
    justc: 'space-around',
    align: 'stretch',
    position: 'relative',
    theme: theme,
  }
  $: menuLinkStyle = {
    color: theme.colors.primary,
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    px: '1rem',
    pt: '.25rem',
    _hover: {
      color: theme.colors.background,
      bg: theme.colors.secondary,
    },
    theme: theme,
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    bg: theme.colors.highlight,
  }
  $: logoStyle = {
    w: '220px',
    h: '40px',
    f: theme.colors.primary,
    _hover: {
      f: theme.colors.secondary,
    },
    theme: theme,
  }
</script>

<Section as="nav" style={navStyle}>
  <Flex dir="row" style={flexStyle}>
    <Logo fill={theme.colors.primary} style={logoStyle} />
    <Flex dir="row" style={flexNavStyle}>
      <Link
        href="."
        style={(menuLinkStyle, segment === undefined ? menuLinkSelected : '')}>
        home
      </Link>
      <Link
        href="about"
        style={segment === 'about' ? menuLinkSelected : menuLinkStyle}>
        about
      </Link>
      <Link
        href="blog"
        style={segment === 'blog' ? menuLinkSelected : menuLinkStyle}>
        blog
      </Link>
    </Flex>
  </Flex>
</Section>
