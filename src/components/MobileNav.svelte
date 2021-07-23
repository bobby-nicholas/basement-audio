<script>
import { slide } from 'svelte/transition';
import SamplePlayer from './SamplePlayer.svelte';

export let navItems = [];
let menuActive = false;
</script>

<nav class="w-full h-10 bg-gray-800 md:hidden sticky top-0 z-20">
	<p class="inline-block pt-1 pl-2"><a href="/">Basement Audio</a><SamplePlayer/></p>
	<button class="float-right flex items-center px-4 py-3 border rounded" type="button"
		on:click={() => menuActive = !menuActive}>
		<svg class="h-3 w-3 bg-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<title>Menu</title>
			<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
		</svg>
	</button>
	{#if menuActive}
	<ul transition:slide class="absolute right-0 top-0 mt-10 w-full bg-gray-900 text-center opacity-90">
		{#each navItems as {slug, label}}
		<li class="px-2 py-1" on:click={() => menuActive = false}><a href={`/${slug}`}>{label}</a></li>
		{/each}
	</ul>
	{/if}	
</nav>
<style>
p {
	@apply font-basement-bold;
	@apply text-gray-100;
	@apply text-2xl;
}
a {
	@apply font-basement-bold;
	@apply text-gray-100;
	@apply text-2xl;
	text-decoration: none;
}
</style>