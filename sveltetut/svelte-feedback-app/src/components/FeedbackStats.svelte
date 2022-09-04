<script>
  import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((acc, item) => acc + item.rating, 0) / count;

</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Rating Average: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
</style>
