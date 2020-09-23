<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style ?? {}
  export let theme = style.theme ?? {}
  export let critical = style.critical ?? false
  let role = $$props.role || null
  let as = $$props.as || null
  let setRole = ''
  let styleProps
  if (role && role !== null) {
    if (typeof role === 'string') {
      setRole = { role }
    } else {
      switch (as) {
        case 'header':
          setRole = { role: 'banner' }
          break
        case 'nav':
          setRole = { role: 'navigation' }
          break
        case 'main':
          setRole = { role: 'main' }
          break
        case 'footer':
          setRole = { role: 'contentinfo' }
          break
        case 'aside':
          setRole = { role: 'complementary' }
          break
        default:
          setRole = { role: 'banner' }
      }
    }
  }
  $: compStyles = styled(style, theme, critical)
  $: styleProps = critical ? { style: compStyles } : { class: compStyles }
</script>

{#if !as || as === 'header'}
  <header {...setRole} {...styleProps}>
    <slot />
  </header>
{:else if as === 'nav'}
  <nav {...setRole} {...styleProps}>
    <slot />
  </nav>
{:else if as === 'main'}
  <main {...setRole} {...styleProps}>
    <slot />
  </main>
{:else if as === 'aside'}
  <aside {...setRole} {...styleProps}>
    <slot />
  </aside>
{:else if as === 'footer'}
  <footer {...setRole} {...styleProps}>
    <slot />
  </footer>
{:else if as === 'section'}
  <section {...styleProps}>
    <slot />
  </section>
{:else if as === 'article'}
  <article {...styleProps}>
    <slot />
  </article>
{/if}
