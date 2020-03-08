<script>
  import { Section, Flex, Box, Link } from '@studiobear/designspek-components'
  export let segment
  export let theme = $$props.theme || {}
  let src = 'ds-horiz.svg'

  $: maybeTheme =
    theme.subscribe && typeof theme.subscribe === 'function' ? theme : null

  $: navStyle = {
    borderBottom: '1px solid',
    borderColor: $theme.colors.primary,
    fontWeight: 300,
    p: '0 1em',
  }
  $: flexStyle = {
    justc: 'space-between',
  }
  $: menuLinkStyle = {
    color: $theme.colors.primary,
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    _hover: {
      color: $theme.colors.secondary,
    },
  }

  $: menuLinkSelected = {
    ...menuLinkStyle,
    _after: {
      position: 'relative',
      content: '""',
      width: 'calc(100% - 1em)',
      height: '4px',
      backgroundColor: 'rgb(255, 62, 0)',
      display: 'block',
      bottom: '-5px',
    },
  }
  $: logoStyle = {
    w: '300px',
    h: '40px',
  }
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '""';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<Section as="nav" style={navStyle}>
  <Flex dir="row" style={flexStyle}>
    <Box style={logoStyle}>
      <img {src} alt="logo" />
    </Box>
    <Box>
      <ul>
        <li>
          <Link
            href="."
            style={segment === 'undefined' ? menuLinkSelected : menuLinkStyle}>
            home
          </Link>
        </li>
        <li>
          <Link
            href="about"
            style={segment === 'about' ? menuLinkSelected : menuLinkStyle}>
            about
          </Link>
        </li>
        <li>
          <a class:selected={segment === 'about'} href="about">about</a>
        </li>
        <li>
          <Link
            href="blog"
            style={segment === 'blog' ? menuLinkSelected : menuLinkStyle}>
            blog
          </Link>
        </li>
      </ul>
    </Box>
  </Flex>
</Section>
{console.log('Nav', $menuLinkSelected)}
