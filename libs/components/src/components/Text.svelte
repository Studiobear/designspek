<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  export let as = 'p'
  $: compStyles = styled(style, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
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
