<script>
  import { onMount } from 'svelte'
  import { addGlobal } from '@studiobear/designspek'
  import { theme, googleFonts } from '../../index'
  import { Section, Box, Heading, Text } from '../../../components'

  let canvas

  export let style
  $$props.theme = theme
  $: bodyStyle = {
    p: '1.5rem',
    backgroundColor: $theme.colors.secondary,
  }
  $: hoverStyle = {
    color: 'text',
    _hover: {
      color: 'primary',
    },
  }

  addGlobal($theme)

  /*
  onMount(() => {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // Outer circle
    ctx.moveTo(110, 75)
    ctx.arc(75, 75, 35, 0, Math.PI, false) // Mouth (clockwise)
    ctx.moveTo(65, 65)
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // Left eye
    ctx.moveTo(95, 65)
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // Right eye
    ctx.stroke()
  })
  */
</script>

<svelte:head>
  <link href={googleFonts} rel="stylesheet" type="text/css" />
</svelte:head>

<Box {...$$props} {style}>
  <button
    on:click={() => ($theme.mode === 'light' ? theme.dark() : theme.light())}
  >
    {$theme.mode === 'light' ? 'to dark mode' : 'to light mode'}
  </button>
  <Box style={bodyStyle}>
    <Section as="header">
      <Heading as="h1" style={{ color: $theme.colors.primary }}>
        HTML5 Test Page
      </Heading>
      <Text style={hoverStyle}>
        This is a test page filled with common HTML elements to be used to
        provide visual feedback whilst building CSS systems and frameworks.
      </Text>
    </Section>
    <Section as="nav" style={{ p: '1.5rem', bg: $theme.colors.background }}>
      <ul>
        <li>
          <a href="#text">Text</a>
          <ul>
            <li><a href="#text__headings">Headings</a></li>
            <li><a href="#text__paragraphs">Paragraphs</a></li>
            <li><a href="#text__blockquotes">Blockquotes</a></li>
            <li><a href="#text__lists">Lists</a></li>
            <li><a href="#text__hr">Horizontal rules</a></li>
            <li><a href="#text__tables">Tabular data</a></li>
            <li><a href="#text__code">Code</a></li>
            <li><a href="#text__inline">Inline elements</a></li>
            <li><a href="#text__comments">HTML Comments</a></li>
          </ul>
        </li>
      </ul>
    </Section>
  </Box>
</Box>
