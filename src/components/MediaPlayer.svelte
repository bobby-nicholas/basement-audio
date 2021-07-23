<script>
let player;
let time, duration;
$: secs = Math.floor(time);
$: max = Math.floor(duration);
export let title, file;
 </script>

<audio bind:this={player} bind:currentTime={time} bind:duration={duration} src={file}></audio>
<div class="bg-gray-800  w-full md:w-2/3 xl:w-1/2 h-30 my-4 rounded-lg shadow-lg flex flex-wrap p-4">
  <div on:click={()=>player.paused ? player.play() : player.pause()} class="rounded-full bg-gray-200 w-1/6 lg:w-1/12 h-12 ml-2 hover:bg-gray-600 cursor-pointer">
    {#if player && player.paused}  
    <img alt="play button" class="object-contain h-12 p-2 pl-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAC60lEQVR4nO2dO4xNURSGP4+g8Co8KoJGPEIrRJREr1VqlVqldkqtUnujujJaTESHTOlReRVMgXAUk81Ervs4Z+/9733O/yVfv9a/JjN39qy9B4wxxhhjjDFmccbAKXURQ6YBvgN3gX3iWgZJs8GPwE1gi7SigdFM8AVwWVnUkJg0gOAIOKorbRhMG0ADfAOWgF2qAvvOrAEE3wE3gM2aMvvLvAMIPgXOSyrtKYsOoAF+AfeBw4J6e0ebAQS/AreBHbmL7hNdBhB8DVzPXXhfiDGA4DJwJm/59RNzAA3wE7gHHMjZRM3EHkDwE3AL2JavlTpJNYDgK+Bqtm4qJPUAgmPgZKaeqiLXABrWj72XgD1ZOquEnAMIfsDH3n9QDCD4DLiYvsWyUQ4gOAKOJO6zWNThB9eAO8DOtO2Whzr4f33L+rHGppRNl4Q68P/5BDiXsO9iUAc9zXCscTBZ9wWgDnkew7H39jQRaFGHu4irwLU0MehQh9rGh8DpFGEoUIfZ1h/0ZJtPHWRXwzbf1tjB5EIdYCxfAlciZ5MFdXCxHQHHoiaUGHVgKQzbfLsj5pQMdVgprWKbTx1SDleAC7ECi406nFwWu82nDia3axS2zacORGUx23zqINQ+As52TrED6gBKULrNp26+JD+z4DZf0Z9vzXyov+pK0N+ChC7jH8IS/TFUpH8RE+mjCKErFHy1Vh1OSn0cLbKq5xXUYcXWf5IUWe0TO+rgulr9I1PqANvqxSyhXk0U6eVckV/werpEX9AQ+hhfUZL4Bl/Sk+hrqkJ9UVuknypAE/x7Kj8+iEnO4MNzNVXs7eciV/hj4ESmnqoidfB+smwGqYL3o31zEjv4cHywP2cTNRMzfD/c2oIYwRezZVYjXYL3490RaBN82DI7JKi3dywavv+BQ2TmDb6KLbMamRV8VVtmNTItfP8bqwxMCv45cElZ1JDYGHz1W2Y10vD3mHivuJZB8gA4ri7CGGOMMcYYY2rhNx+Yh0m5pr1AAAAAAElFTkSuQmCC"/>
    {:else}
    <img alt="pause button" class="object-contain h-12 p-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVR4nO3RMQqAQAADwdP//1lbK5FDXcGZPhDYMQAAAAD4i2Vis93+4tzMx6NP/12fesE1AsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMAAAAAAB4yQ65kAKQ2nKZeQAAAABJRU5ErkJggg=="/>
    {/if}
  </div>
  <p class="w-4/6 pl-4 pt-2 text-basement-green">{title}</p>
  {#if player}
  <progress value="{secs || 0}" max="{max || 0}" class="w-full rounded-full m-2"/>
  {/if}
</div>
<style>
progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
   appearance: none;
}
progress[value]::-webkit-progress-bar  {
  @apply rounded-full;
  @apply shadow-md;
  @apply bg-black;
}
progress[value]::-webkit-progress-value {
  @apply rounded-full;
  background-color: #c0ff00;
}
progress[value]::-moz-progress-bar {
  @apply rounded-full;
  @apply shadow-md;
  background-color: #c0ff00;
}
p {
  font-variant: small-caps;
  @apply text-xl !important;
}
@screen md {
  p {
    @apply text-2xl !important;
  }
}
@screen lg {
  p {
    @apply p-0;
    @apply pl-4;
    @apply text-3xl !important;
  }
}
</style>


















<!-- <style>

.play-button {
  @apply w-24 h-24 rounded-full mt-8 ml-4 bg-gray-200 text-black text-2xl inline-block p-0;
}
.play-button:hover {
  @apply w-24 h-24 rounded-full mt-8 ml-4 bg-basement-green;
}

.player {
  border-radius: 15px;
  background: linear-gradient(145deg, #1c222f, #171d28);
  box-shadow:  13px 13px 27px #141821, 
              -13px -13px 27px #212837;
  @apply w-full h-40 ml-2 mr-16;
}
@screen md {
  .player {
    @apply w-2/3;
  }
}
@screen lg {
  .player {
    @apply w-1/2;
  }
}
</style> -->