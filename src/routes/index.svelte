<script context="module">
export async function preload() {
	return { sections: []};
}

</script>

<script>
import CtaButton from '../components/CtaButton.svelte';
</script>
<svelte:head>
	<title>Basement Audio</title>
</svelte:head>
<div class="main-content">
	<h1>Basement Audio</h1> 
	<p>Basement Audio is a full-feature recording studio located in Binghamton, NY, run by musician and audio engineer Dave Rice.</p>
	<p>In operation for over 20 years, Dave has worked with hundreds of local and regional artists on their recording projects.</p>
	<p>Click the play button in the navigation menu to hear a mix of some recent work.</p>
	<p>
		Dave believes in working collaboratively with artists to achieve their vision while building relationships with clients over the long term.
		No project is complete until the artist is happy with the results.
	</p>
	<CtaButton text={'See Our Artist Reviews'} link={'/reviews'} />
	<h2><a href="/studio">Studio</a></h2>
	<img src="images/studio/full/monitor.jpg" alt="Studio Picture"/>
	<p>The studio feautures a large live recording room, vocal and isolation booth, and control room.</p>
	<p>Drum kits, guitar and bass rigs, keyboards, MIDI controllers, and other instruments are available for client use.</p>
	<CtaButton text={'Check Out The Studio'} link={'/studio'} />
	<h2><a href="/rates">Services & Rates</a></h2> 
	<p>Basement Audio provides a variety of services ranging from recording, mixing, and mastering to audio editing and creative services.</p>
	<p>All work is billed at a flat rate with package deals available at a discount.</p>
	<CtaButton text={'See Our Deals'} link={'/rates'} />
	<h2><a href="/contact">Contact</a></h2> 
	<p>If you are interested in booking a session, or have any questions, please reach out! Our <a href="https://www.facebook.com/basementaudio">Facebook page</a> always appreciates likes, too.</p>
	<CtaButton text={'Get In Touch'} link={'/contact'} />
</div>

<style>
h2 a {
	text-decoration: none;
	color: inherit;
}
.main-content :global(p) {
	@apply mb-4;
	@apply text-xl;
}
.main-content :global(h1), :global(h2) {
	font-variant: small-caps;
	@apply font-basement-bold;
	@apply text-5xl;
	@apply leading-none;
	@apply my-4;
	@apply border-b-2;
	@apply border-basement-green;
}
.main-content :global(img) {
	@apply mx-auto;
	@apply object-contain;
	@apply mb-8;
}
.main-content :global(strong) {
	@apply font-bold;
}
@screen md {
	.main-content :global(h1), :global(h2) {
		@apply text-6xl;
	}
}
</style>