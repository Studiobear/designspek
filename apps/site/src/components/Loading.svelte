<script>
  import { styled } from '@studiobear/designspek'
  import Icon from './Icon.svelte'
  export let theme = $$props.theme || { colors: { primary: '#333' } }
  export let ssr = $$props.ssr || false
  let icon = {
    w: '3rem',
    h: 'auto',
    animation: 'spin 2s infinite',
    _keyframesSpin: {
      from: {
        transform: 'rotate(0)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  }
</script>

<Icon name="heart" style={icon} fill={theme.colors.primary} {ssr} />
