import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Svelte",
    user: "Shawon",
  },
});

export default app;
