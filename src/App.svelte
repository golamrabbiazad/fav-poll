<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items: string[] = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChangeHandler = (e: CustomEvent) => {
    activeItem = e.detail;
  };

  const handleAddPoll = (e: CustomEvent) => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
