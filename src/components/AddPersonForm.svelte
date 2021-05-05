<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type People from "../AppShape/types";

  let dispatch = createEventDispatcher();

  let name: string;
  let beltColor: string;
  let age: number;
  let skills: string[] = [];

  const handleSubmit = () => {
    const person: People = {
      name,
      beltColor,
      age,
      skills,
      id: Math.ceil(Math.random() * 100),
    };
    dispatch("addPerson", person);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h3>Add a New Person</h3>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="number" placeholder="Age" bind:value={age} />
  <label>Belt Color</label>
  <select bind:value={beltColor}>
    <option value="black">Black</option>
    <option value="darkblue">Dark Blue</option>
    <option value="pink">Pink</option>
  </select>
  <label>Skills:</label>
  <input type="checkbox" bind:group={skills} value="fronend" />Frontend<br />
  <input type="checkbox" bind:group={skills} value="backend" />Backend<br />
  <input type="checkbox" bind:group={skills} value="fullstack" />Fullstack<br />

  <button>Add Person</button>
</form>

<style></style>
