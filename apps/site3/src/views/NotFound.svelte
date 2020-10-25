<script lang="ts">
  let message: string =
    "404, Not Found — We're sorry, but what you are looking for isn't here!"
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <h1>{message}</h1>
  </header>
</div>
