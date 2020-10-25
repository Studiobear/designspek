<script>
  export let posts
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <h2><a rel="prefetch" href="/blog/{post.slug}">{post.title}</a></h2>
      {@html post.excerpt}
      <div>
        <div>Date: {post.date}</div>
        <div>
          <a rel="prefetch" href="/blog/{post.slug}">Read more&hellip;</a>
        </div>
      </div>
    </li>
  {/each}
</ul>
