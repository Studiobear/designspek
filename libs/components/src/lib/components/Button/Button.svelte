<script type="ts">
  import { createEventDispatcher } from 'svelte'

  export let text: string = ''

  const dispatch = createEventDispatcher<{
    /**
     * Button click
     */
    click: boolean // Will translate to `CustomEvent<boolean>`
  }>()

  function onClick(event: any) {
    dispatch('click', event)
  }
</script>

<button on:click={onClick} class="button">
  <slot />
  {text}
</button>
