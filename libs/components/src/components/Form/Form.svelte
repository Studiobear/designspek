<script>
  import { styled } from '@studiobear/designspek'
  import Field from './Field.svelte'
  import Text from '../Text.svelte'

  let div
  export let fields = $$props.fields || []
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let ssr = $$props.ssr || style.ssr || false
  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, ssr)
  $: styleProps = ssr ? { style: compStyles } : { class: compStyles }
  // $: console.log('Box', style, theme, compStyles, styleProps)

  let formFields = fields && fields.length > 0 ? fields : false
</script>

<form bind:this={div} on:click {...styleProps}>
  {#if !formFields}
    <Text>No form fields</Text>
  {:else}
    {#each formFields as fieldItem, i}
      <Field key={i} {theme} {style} {...fieldItem} />
    {/each}
  {/if}
</form>
