<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./utils/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  // tabs
  let items: string[] = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChangeHandler = (e: CustomEvent) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === "Current Polls"}
    <p>Poll list compos goes here</p>
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
