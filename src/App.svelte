<script lang="ts">
  import Modal from "./components/Modal.svelte";
  import AddPersonForm from "./components/AddPersonForm.svelte";
  import type People from "./AppShape/types";

  // variables or states
  export let name: string;
  let showModal = false;

  let peoples: People[] = [
    { name: "Can", beltColor: "black", age: 25, id: 1, skills: [] },
    { name: "yaman", beltColor: "orange", age: 28, id: 2, skills: [] },
    { name: "murat", beltColor: "pink", age: 24, id: 3, skills: [] },
  ];

  // functions
  const deletePerson = (id: number) => {
    peoples = peoples.filter((person) => person.id != id);
  };

  const toggleModal = () => {
    showModal = !showModal;
  };

  const addPerson = (e: CustomEvent) => {
    const person = e.detail;
    peoples = [...peoples, person];
    showModal = false;
  };
</script>

<Modal {showModal} on:click={toggleModal}>
  <AddPersonForm on:addPerson={addPerson} />
</Modal>
<main>
  <button on:click|once={toggleModal}>show modal</button>
  <h1>{name}!</h1>
  {#each peoples as person (person.id)}
    <div>
      <h4>Name: {person.name}</h4>
      {#if person.beltColor === "black"}
        <p><strong>Master Ninja</strong></p>
      {/if}
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
