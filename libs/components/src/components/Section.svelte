<script>
  import { styled } from '@studiobear/designspek'

  export let style = $$props.style || {}
  export let theme = $$props.theme || {}
  let role = $$props.role || null
  let as = $$props.as || null
  let setRole = ''
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
  $: compStyles = styled(style, theme)
</script>

{#if !as || as === 'header'}
  <header {...setRole} class={compStyles}>
    <slot />
  </header>
{:else if as === 'nav'}
  <nav {...setRole} class={compStyles}>
    <slot />
  </nav>
{:else if as === 'main'}
  <main {...setRole} class={compStyles}>
    <slot />
  </main>
{:else if as === 'aside'}
  <aside {...setRole} class={compStyles}>
    <slot />
  </aside>
{:else if as === 'footer'}
  <footer {...setRole} class={compStyles}>
    <slot />
  </footer>
{:else if as === 'section'}
  <section class={compStyles}>
    <slot />
  </section>
{:else if as === 'article'}
  <article class={compStyles}>
    <slot />
  </article>
{/if}
