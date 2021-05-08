<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./utils/Tabs.svelte";
  import type { Poll } from "./lib/types";

  // dummy poll data
  let polls: Poll[] = [
    {
      id: 1,
      question: "TypeScript or Python?",
      answerA: "TypeScript",
      answerB: "Python",
      votesA: 9,
      votesB: 15,
    },
  ];

  // tabs
  let items: string[] = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChangeHandler = (e: CustomEvent) => {
    activeItem = e.detail;
  };

  const handleAddPoll = (e: CustomEvent) => {
    const poll = e.detail;
    polls = [poll, ...polls];

    console.log(polls);

    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} />
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
