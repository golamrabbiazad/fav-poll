<script lang="ts">
  export let name: string;
  export let user: string;

  $: fullName = `${name} ${user}`;

  const globalColor = "#e75480 ";

  const handleClick = () => {
    name = "undefined";
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p style="color: {globalColor}">Welcome {user}, svelte happy to join us.</p>
  <button on:click={handleClick}>update</button>

  <!-- svelte binds event 2 ways -->

  <!-- 1st way to bind events -->
  <!-- <input type="text" on:input={updateName} value={user} /> -->

  <!-- 2nd way to bind events is much simpler. -->
  <input type="text" bind:value={name} />

  <p>{fullName}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    font-weight: 700;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
