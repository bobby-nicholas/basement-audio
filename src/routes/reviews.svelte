<script context="module">
export async function preload() {
  return this.fetch(`/artist-manifest.json`).then(r => r.json()).then(reviews => {
    return {reviews};
  });
}
</script>
<script>
import Testimonial from '../components/Testimonial.svelte';
export let reviews;
</script>
<h1>Reviews</h1>
{#if reviews}
{#each reviews as item}
<Testimonial {item} />
{/each}
{/if}
<svelte:head>
	<title>Reviews | Basement Audio</title>
</svelte:head>
<style>
h1 {
	font-variant: small-caps;
	@apply font-basement-bold;
	@apply text-5xl;
	@apply leading-none;
	@apply my-4;
	@apply border-b-2;
	@apply border-basement-green;
}
</style>