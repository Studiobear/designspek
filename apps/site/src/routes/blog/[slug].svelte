<script context="module">
  export const preload = async function({ params }) {
    const fetchBlog = await this.fetch(`/blog/${params.slug}.json`)
      .then(response => response.json())
      .then(data => {
        return { post: data }
      })
      .catch(console.error)
    return fetchBlog
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
