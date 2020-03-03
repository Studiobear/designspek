<script>
  import { styled } from 'svelte-styled-system'
  import { theme } from '../theme'
  import { Counter } from 'my-svelte-component-library'

  import { Box, Heading } from '../components'
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Heading as="h1">Great success!</Heading>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<Heading as="h3">Local library component demo</Heading>
<p>
  Our counter component from sample Svelte component Library from root dir:
  `/libs/my-svelte-component-library`
</p>
<div class="component-container">
  <Counter />
</div>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>

<Box bg={'colors.primary'} color={'colors.secondary'}>
  {$theme.colors.primary}
</Box>
