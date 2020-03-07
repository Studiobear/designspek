<script>
  import { Section, Flex, Box } from '@studiobear/designspek-components'
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
    content: '';
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
    <Box>
      <img {src} alt="logo" />
    </Box>
    <ul>
      <li>
        <a class:selected={segment === undefined} href=".">home</a>
      </li>
      <li>
        <a class:selected={segment === 'about'} href="about">about</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a class:selected={segment === 'blog'} href="blog">blog</a>
      </li>
    </ul>
  </Flex>
</Section>
