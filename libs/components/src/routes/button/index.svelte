<script type="ts">
  import Button from '$lib/components/Button/Button.svelte'
  $: response = ''
  function clickHandler(event: any) {
    response = JSON.stringify(event.detail)
  }
</script>

<Button text="click me!" on:click={clickHandler} />

<pre><code>
  {response}
</code></pre>
