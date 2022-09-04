<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";



//   const deleteFeedback = (e) => {
//     feedback = feedback.filter((fb) => fb.id !== e.detail);
//   };
//   const addFeedback = (e) => {
//     const { id, rating, text } = e.detail;
//     feedback = [...feedback, { id, rating, text }];
//   };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList  />
</main>

<style>
</style>
