<script lang="ts">
	    import ContactModal from '$lib/ContactModal.svelte';
    let showModal = false;
    import Footer from '$lib/Footertwo.svelte';
    import MobNav from './compoents/MobNav.svelte';
import '../app.postcss';
	import { AppBar, LightSwitch  } from '@skeletonlabs/skeleton';
	let buttons=[
		{
						title: "Home",
						url:"/"

		},
		{
						title: "About Us",
						Butid:"#about",
						url:"#about"



			
		},
		{
						title: "Services",
						Butid:"#services",
						url:"#services"
			
		},
		{
						title: "Courses",
						Butid:"#courses",
						url:"#courses"
			
		}
	];


</script>


<div class="lg:hidden flex">
    <MobNav on:openContact={() => showModal = true} />
</div>





<!-- Use a single column on small screens; show multiple columns at the medium breakpoint or wider -->
<div class="grid grid-cols-1 lg:grid-cols -[auto_1fr]">
  <!-- Hide the sidebar on small screens; show at the medium breakpoint or wider -->
  <!-- Remains visible at all breakpoints -->

	<!-- Header -->
	  <header class="sticky lg:top-0 z-10 bg-red-5 00/80 backdrop-blur-sm p-1.5 hidden lg:block">
		
		
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-32 w-32 rounded-xl drop-shadow-2xl shadow-2xl " src="/image0.jpeg" alt="">

				<strong class="pl-8 text-lg uppercase hidden lg:flex">Nangfang Quantou</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
		
		
			
			{#each buttons as button}
    <a href="{button.url}" id="{button.Butid}" 
        class="btn btn-sm relative overflow-hidden inline-flex items-center justify-center h-9 px-6 py-0 mx-1
        text-center font-medium tracking-wider uppercase text-sm
        bg-gradient-to-r from-transparent to-transparent
        border-[1.5px] border-gray-600
        rounded-full
        transition-all duration-300 ease-out
        backdrop-blur-sm
        hover:border-orange-500/70 hover:text-orange-100
        hover:shadow-[0_0_15px_rgba(234,88,12,0.2)]
        before:absolute before:inset-0 before:w-full before:h-full
        before:bg-orange-700/30 before:scale-x-0 before:origin-right before:transition-transform before:duration-300
        hover:before:scale-x-100 hover:before:origin-left
        group">
        <span class="relative z-10">{button.title}</span>
    </a>
{/each}

<!-- Contact Us modal button -->
<button
    class="btn btn-sm relative overflow-hidden inline-flex items-center justify-center h-9 px-6 py-0 mx-1
    text-center font-medium tracking-wider uppercase text-sm
    bg-gradient-to-r from-transparent to-transparent
    border-[1.5px] border-gray-600
    rounded-full
    transition-all duration-300 ease-out
    backdrop-blur-sm
    hover:border-orange-500/70 hover:text-orange-100
    hover:shadow-[0_0_15px_rgba(234,88,12,0.2)]
    before:absolute before:inset-0 before:w-full before:h-full
    before:bg-orange-700/30 before:scale-x-0 before:origin-right before:transition-transform before:duration-300
    hover:before:scale-x-100 hover:before:origin-left
    group"
    on:click={() => showModal = true}
    type="button"
>
    <span class="relative z-10">Contact Us</span>
</button>
				<LightSwitch />

			</svelte:fragment>
		</AppBar>
	<!-- Page Route Content -->

	
	
	
	</header>
	  <!-- Main -->	
	   <div class=" mx-auto">
	   

	   </div>
	   <slot />

	 
	  <!-- Footer -->
	  <footer class=" p-1 pt-3">

<Footer />
		

	  </footer>
  </div>

  


<!-- Place the modal at the root of your layout -->
<ContactModal open={showModal} onClose={() => showModal = false} />

  <style>
:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 0.3rem; /* mobile header height */
}
@media (min-width: 1024px) {
  :global(html) {
    scroll-padding-top: 9rem; /* desktop header height */
  }
}
  </style>

