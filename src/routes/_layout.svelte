<script>
import { slide } from 'svelte/transition';
import MobileNav from '../components/MobileNav.svelte';
import DesktopNav from '../components/DesktopNav.svelte';
import Hero from '../components/Hero.svelte';
import Container from '../components/Container.svelte';
import Footer from '../components/Footer.svelte';
let menuActive = false;
let navItems = [
  { slug: 'reviews', label: 'Reviews' },
  { slug: 'studio', label: 'Studio' },
  { slug: 'rates', label: 'Services & Rates' },
  { slug: 'contact', label: 'Contact' }
]
</script>
<Container>
	<MobileNav {navItems} />
	<Hero src={'images/assets/BASEMENT-LOGO-2020-COLOR.png'} />
	<DesktopNav {navItems} />
	<main class="mt-4 p-4">
		<slot></slot>
	</main>
</Container>
<Footer/>
