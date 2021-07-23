<svelte:head>
	<title>Services & Rates | Basement Audio</title>
</svelte:head>

<h1>Services & Rates</h1>

<h2>Services</h2>
<ul>
	<li>Capturing/recording music and vocals</li> 
	<li>Editing, mixing, and mastering</li>
	<li>Songwriting, arranging, and production</li>
	<li>MIDI and digital music creation</li>
	<li>Digitization of audio from vinyl, cassettes, etc.</li>
</ul> 
<h2>Rates</h2>
<p><em>Package deals are paid in advance and can be used in multiple sessions</em></p>
<ul>
<li>
	<p>Normal Rate: <strong>$30.00 per hour</strong></p>
</li>
<li>
	<p>10 Hour Package Deal: <strong>$250.00</strong></p>
</li>
<li>
	<p>20 Hour Package Deal: <strong>$400.00</strong></p>
</li>
</ul>
<style>
li {
	@apply text-lg;
	@apply m-2;
}
ul {
	@apply list-disc;
	@apply my-2;
	@apply ml-4;
}
h1 {
	font-variant: small-caps;
	@apply font-basement-bold;
	@apply text-5xl;
	@apply leading-none;
	@apply my-4;
	@apply border-b-2;
	@apply border-basement-green;
}
h2 {
	@apply font-basement-bold;
	@apply text-4xl;
	@apply leading-none;
	@apply mb-4;
	@apply mt-8;
	@apply border-b-2;
	@apply border-gray-800;
}
p {
	@apply mb-4;
	@apply text-xl;
}
@screen md {
	h1 {
		@apply text-6xl;
	}
	h2 {
		@apply text-5xl;
	}
}
</style>