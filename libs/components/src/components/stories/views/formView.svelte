<script>
  import Form from '../../Form'

  export let style = {}
  const fields = [
    { name: 'name', label: 'Name', validate: val => val.length > 0 },
    { name: 'email', label: 'Email', validate: isValidEmail },
  ]
</script>

<Form {fields} {style} />
