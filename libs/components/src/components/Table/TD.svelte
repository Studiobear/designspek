<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false

  let compStyles = ''
  if (style.length > 0) {
    style.map(s => {
      let tmpStyle = styled(s, theme, ssr)
      console.log('TD style array:', tmpStyle)
      compStyles += `${tmpStyle} `
    })
  } else {
    compStyles = styled(style, theme, ssr)
  }

  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)
</script>

<td {...styleProps}>
  <slot />
</td>
