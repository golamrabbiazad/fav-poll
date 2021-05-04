<script lang="ts">
  type People = {
    name: string;
    beltColor: string;
    age: number;
    id: number;
  };

  const globalColor = "#e75480 ";
  export let name: string;
  export let user: string;

  let peoples: People[] = [
    { name: "Can", beltColor: "black", age: 25, id: 1 },
    { name: "yaman", beltColor: "orange", age: 28, id: 2 },
    { name: "murat", beltColor: "pink", age: 24, id: 3 },
  ];

  const deletePerson = (id: number) => {
    peoples = peoples.filter((person) => person.id != id);
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <p style="color: {globalColor}">Welcome {user}, svelte happy to join us.</p>

  {#each peoples as person (person.id)}
    <div>
      <h4>Name: {person.name}</h4>
      <p>Age: {person.age} - Favourite Color: {person.beltColor}</p>
      <button on:click={() => deletePerson(person.id)}>Delete</button>
    </div>
  {:else}
    <p>There are no people to show</p>
  {/each}
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
