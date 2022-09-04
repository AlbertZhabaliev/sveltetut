<script>
  // import {onMount, onDestroy} from 'svelte';
  import {FeedbackStore} from '../stores';
  import {fade,scale } from 'svelte/transition';
  import FeedbackItem from "./FeedbackItem.svelte";
  // let feedback = [];

  // const unSubscribe = FeedbackStore.subscribe((value) => {
  //   feedback = value;
  // });


  // onMount(() => {
  //   console.log("FeedbackList mounted");
  // });

  // onDestroy(() => {
  //   console.log("FeedbackList destroyed");
  //   unSubscribe();
  // });
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>
    <FeedbackItem item={fb}/>
</div>
{/each}
