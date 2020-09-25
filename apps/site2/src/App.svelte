<script lang="ts">
  export let title: string = $$props.title ?? 'no title'
</script>

<section type="main">
  <div>{title}</div>
  <slot />
</section>
