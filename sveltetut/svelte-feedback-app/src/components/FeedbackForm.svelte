<script>
  import { FeedbackStore } from "../stores";
  import { v4 as uuidv4 } from "uuid";
  import {createEventDispatcher} from 'svelte';
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

    const dispatch = createEventDispatcher();

  let text = "";
  let btnDisabled = true;
  let min = 10;
  let message = "";
  let rating = 10;

  const handleSelect = (e) => {
    rating = e.detail;
  };

  const handleInput = (e) => {
    if (text.trim().length <= min) {
      message = `Please enter at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
    text = e.target.value;
    btnDisabled = text.length < 5;
  };

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };
      FeedbackStore.update((currentFeedback) => {
        return [newFeedback, ...currentFeedback];
      });
      // dispatch("submit-feedback", newFeedback);	
      text = "";
      btnDisabled = true;
    }
  };
</script>

<Card>
  <header>
    <h3>Send us your feedback</h3>
    <form on:submit|preventDefault={handleSubmit}>
      <RatingSelect on:rating-select={handleSelect} />
      <div class="input-group">
        <input
          type="text"
          on:input={handleInput}
          placeholder="Type your feedback here"
          bind:value={text}
        />
        <Button disabled={btnDisabled} type="submit">Send</Button>
      </div>
      {#if message}
        <p class="message">{message}</p>
      {/if}
    </form>
  </header></Card
>

<style>
  .input-group {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  input:focus {
    outline: none;
  }
</style>
