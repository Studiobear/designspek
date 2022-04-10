<script>
  import Link from '../../Link.svelte'

  export let style = {}
  export let linkText = 'I am a link!'
  export let href = '#'
</script>

<Link {href} {...$$props} {style}>{linkText}</Link>
