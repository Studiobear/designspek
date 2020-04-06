<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let as = 'p'
  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
</script>

{#if !as || as === 'p'}
  <p {...styleProps}>
    <slot />
  </p>
{:else if as === 'span'}
  <span {...styleProps}>
    <slot />
  </span>
{:else if as === 'strong'}
  <strong {...styleProps}>
    <slot />
  </strong>
{:else if as === 'emphasis'}
  <em {...styleProps}>
    <slot />
  </em>
{/if}
