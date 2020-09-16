<script lang="ts">
  import { styled } from '@studiobear/designspek'
  import { createEventDispatcher } from 'svelte'

  export let text = ''
  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  const dispatch: any = createEventDispatcher()

  function onClick(event: Event) {
    dispatch('click', event)
  }

  const defaultStyle = {
    brd: '1px solid',
    brdCol: '#ccc',
    borderRadius: '3px',
    ...style,
  }
  $: compStyles = styled(defaultStyle, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
</script>

<button on:click={onClick} {...styleProps}>
  <slot />
  {text}
</button>
