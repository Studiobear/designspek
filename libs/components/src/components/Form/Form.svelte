<script>
  import { styled } from '@studiobear/designspek'
  import Field from './Field.svelte'
  import Text from '../Text.svelte'
  import { getValues } from './formUtil'

  export let fields = $$props.fields || []
  export let style = $$props.style || {}
  export let theme = $$props.theme || style.theme || {}
  export let values = {}
  const defaultStyle = [
    {
      boxSizing: 'border-box',
      margin: 0,
      minWidth: 0,
    },
  ]
  $: compStyles = styled(defaultStyle.concat(style), theme, false)

  let formFields = fields && fields.length > 0 ? fields : false
</script>

<form
  class={compStyles}
  on:update={(e) => {
    console.log('Form onUpdate:', e, values)
    values = e.detail
    return values
  }}
  on:submit={(e) => {
    console.log('Form submitted:', e, values)
    values = e.detail
    return values
  }}
  use:getValues={values}>
  <slot />
  {#if !formFields}
    <Text>No form fields</Text>
  {:else}
    {#each formFields as fieldItem, i}
      <Field key={i} {theme} {style} {...fieldItem} bind:values />
    {/each}
  {/if}
</form>
