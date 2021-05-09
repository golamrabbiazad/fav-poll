import { writable } from "svelte/store";
import type { Poll } from "../lib/types";

const PollStore = writable<Poll[]>([
  {
    id: 1,
    question: "TypeScript or Python?",
    answerA: "TypeScript",
    answerB: "Python",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
