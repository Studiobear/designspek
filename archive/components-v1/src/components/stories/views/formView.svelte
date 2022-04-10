<script>
  import { Text } from '@studiobear/designspek-components'
  import Form from '../../Form'

  export let style = {}
  export let fields = []
  let values
  $: console.log('FormView: ', values)
</script>

<Form {fields} {style} bind:values />

<pre>{JSON.stringify(values, undefined, 1)}</pre>
