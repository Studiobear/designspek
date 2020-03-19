<script>
  import { styled } from '@studiobear/designspek'
  import { createEventDispatcher } from 'svelte'

  export let text = ''
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
  $: compStyles = styled(
    {
      brd: '1px solid',
      brdCol: '#ccc',
      borderRadius: '3px',
      ...style,
    },
    theme,
    ssr,
  )
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
</script>

<button on:click={onClick} {...styleProps}>
  <slot />
  {text}
</button>
