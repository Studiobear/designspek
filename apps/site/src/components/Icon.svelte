<script>
  import { SVG } from '@studiobear/designspek-components'

  export let style = { d: 'none' }
  export let ssr = $$props.ssr || false
  export let fill
  export let viewBox = '0 0 512 512'
  export let name = 'heart'
</script>

<SVG {fill} {viewBox} {...$$props} {style} {ssr}>
  <use xlink:href={`#${name}`} />
</SVG>
