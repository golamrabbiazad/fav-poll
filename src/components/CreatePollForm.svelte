<script lang="ts">
  type Field = {
    question: string;
    answerA: string;
    answerB: string;
  };

  let fields: Field = {
    question: "",
    answerA: "",
    answerB: "",
  };

  const handleSubmitForm = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={handleSubmitForm}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
  </div>
  <div class="form-field">
    <label for="question-a">Answer A:</label>
    <input type="text" id="question-a" bind:value={fields.answerA} />
  </div>
  <div class="form-field">
    <label for="question-b">Answer B:</label>
    <input type="text" id="question-b" bind:value={fields.answerB} />
  </div>
  <button>Add Poll</button>
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
</style>
