<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  import type { Field, Poll } from "../lib/types";
  import PollStore from "../store/PollStore";

  const dispatch = createEventDispatcher();

  let fields: Field = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let errors: Field = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let valid = false;

  const handleSubmitForm = () => {
    handleFormValidation();

    if (valid) {
      let poll: Poll = {
        id: Math.ceil(Math.random() * 100),
        ...fields,
        votesA: 0,
        votesB: 0,
      };
      PollStore.update((curr_poll) => {
        return [poll, ...curr_poll];
      });
      dispatch("add");
      fields.question = "";
      fields.answerA = "";
      fields.answerB = "";
    }
  };

  // validation logic
  const handleFormValidation = () => {
    valid = true;

    // validation for question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question is must be atlest 5 characters long";
    } else {
      errors.question = "";
    }

    // for answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A can't be empty";
    } else {
      errors.answerA = "";
    }

    // for answer B
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B can't be empty";
    } else {
      errors.answerB = "";
    }
  };
</script>

<form on:submit|preventDefault={handleSubmitForm}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="question-a">Answer A:</label>
    <input type="text" id="question-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="question-b">Answer B:</label>
    <input type="text" id="question-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
