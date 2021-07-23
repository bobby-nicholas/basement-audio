<script>
import { fade } from 'svelte/transition';
export let image = '/images/monitor.png';
export let alt = 'Gallery image';
let fullscreen = false;
</script>

{#if fullscreen}
<img transition:fade src={image.full} {alt} class="fixed top-0 left-0 w-screen h-screen z-50 bg-black object-contain" on:click={() => fullscreen = !fullscreen}/>
{/if}
<img src={image.thumbnail} {alt} class="w-full md:w-1/2 xl:w-1/3 p-2" on:click={() => fullscreen = !fullscreen}/>

<style>
img {
  cursor: pointer;
}
</style>