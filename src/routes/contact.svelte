<svelte:head>
	<title>Contact | Basement Audio</title>
</svelte:head>

<h1>Contact</h1>

<p>For all inquiries, email <a href="mailto:basementaudio@gamil.com">basementaudio@gmail.com</a></p>
<p>If you are looking to book a session, tell us about the nature of your project and dates and times that work best for you.</p>
<p>See our <a href="https://www.facebook.com/BasementAudio/">Facebook page</a> for news, media, and other updates.</p>

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
p {
	@apply mb-4;
	@apply text-xl;
}
@screen md {
	h1 {
		@apply text-6xl;
	}
}
</style>