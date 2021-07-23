<script>
import { onMount } from 'svelte';


let player, track;
let isPaused = true;

$: icon = isPaused ? 'PLAY ▶️' : 'PAUSE ⏸️'

export let file = '/samples/sample-track-2020.mp3';
export let size = 'sm';
onMount(() => {
})
const playPause = () => {
  if (isPaused) player.play();
  else player.pause();
  isPaused = !isPaused;
}
 </script>

<audio bind:this={player} src={file} loop></audio>
<span class:large="{size === 'lg'}" class="cursor-pointer" on:click={playPause}>{icon}</span>


<style>
audio {
  display: none;
}
.large {
  font-size: 2rem;
}
</style>