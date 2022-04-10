<script>
  import Icon from '../../Icon.svelte'
  import Icons from './iconSVG.svelte'

  export let style = { d: 'none' }
  export let fill = '#fff'
  export let viewBox = '0 0 512 512'
</script>

<Icons />
<Icon name="bear1" {style} {fill} {viewBox} />
