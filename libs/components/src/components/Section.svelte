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
</script>

{#if !as || as === 'header'}
  <header {...setRole} use:styled={[style, theme]}>
    <slot />
  </header>
{:else if as === 'nav'}
  <nav {...setRole} use:styled={[style, theme]}>
    <slot />
  </nav>
{:else if as === 'main'}
  <main {...setRole} use:styled={[style, theme]}>
    <slot />
  </main>
{:else if as === 'aside'}
  <aside {...setRole} use:styled={[style, theme]}>
    <slot />
  </aside>
{:else if as === 'footer'}
  <footer {...setRole} use:styled={[style, theme]}>
    <slot />
  </footer>
{:else if as === 'section'}
  <section use:styled={[style, theme]}>
    <slot />
  </section>
{:else if as === 'article'}
  <article use:styled={[style, theme]}>
    <slot />
  </article>
{/if}
