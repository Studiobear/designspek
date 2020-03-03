<script>
  import Section from '../../Section.svelte'

  export let style = {}
  export let sectionText = 'I am a section!'
</script>

<Section {...$$props} {style}>{sectionText}</Section>
