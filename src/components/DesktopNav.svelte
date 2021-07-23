<script>
import SamplePlayer from './SamplePlayer.svelte';
export let navItems = [];
</script>

<div class="hidden md:block md:w-full md:sticky md:top-0 z-10 md:bg-gray-900">
	<ul class="hidden md:flex md:justify-center md:font-extrabold pt-12 pb-4 px-4">
		{#each navItems as item}
		<li class="inline">
			<a class="text-lg sm:text-xl md:text-2xl lg:text-3xl mx-1 md:mx-4 hover:underline active:underline" href={`/${item.slug}`}>{item.label}</a>
		</li>
		{/each}
		<li class="float-rght text-xl"><SamplePlayer size={'lg'}/></li>
	</ul>
</div>
