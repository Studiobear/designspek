<script>
  import { createEventDispatcher } from 'svelte'
  import Section from './Section.svelte'
  import Box from './Box.svelte'
  import Button from './Button.svelte'
  import Heading from './Heading.svelte'
  export let value = 0
  export let step = 1

  const dispatch = createEventDispatcher()

  const onClick = value => {
    dispatch('counter', value)
  }
</script>

<Section as="article">
  <slot>Default Counter</slot>
  <Box>
    <Heading as="h3">{value}</Heading>
    <Button on:click={() => onClick((value += step))}>+</Button>
    <Button on:click={() => onClick((value -= step))}>-</Button>
  </Box>
</Section>
