<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  export let as = 'th'

  $: compStyles = styled(style, theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('THead', style, theme, compStyles, styleProps)
</script>

{#if !as || as === 'th'}

  <th on:click {...styleProps}>
    <slot />
  </th>
{:else if as === 'thead'}
  <thead on:click {...styleProps}>
    <slot />
  </thead>
{:else if as === 'tfoot'}
  <tfoot on:click {...styleProps}>
    <slot />
  </tfoot>
{:else if as === 'colGroup'}
  <colGroup {...styleProps}>
    <slot />
  </colGroup>
{:else if as === 'col'}
  <col {...styleProps} />
{/if}
