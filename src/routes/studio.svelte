<script context="module">
export async function preload() {
  return this.fetch(`/image-manifest.json`).then(r => r.json()).then(imgs => {
      const album = imgs.studio;
      return { album };
		});
}
</script>
<script>
import GalleryImage from '../components/GalleryImage.svelte';
export let album;
</script>

<div class="flex flex-wrap items-center">
{#each album as image}
  <GalleryImage {image} />
{/each}
</div>

<svelte:head>
	<title>Studio | Basement Audio</title>
</svelte:head>