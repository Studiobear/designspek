<script>
  import { styled } from '@studiobear/designspek'
  import { createEventDispatcher } from 'svelte'

  export let text = ''
  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
  $: btnStyle = {
    brd: '1px solid',
    brdCol: '#ccc',
    borderRadius: '3px',
    bg: '#aaa',
    px: 1,
    py: 2,
    m: 2,
    ...style,
  }
</script>

<button class="button" on:click={onClick} use:styled={[btnStyle, theme]}>
  <slot />
  {text}
</button>
