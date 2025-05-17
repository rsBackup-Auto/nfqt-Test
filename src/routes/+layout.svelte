<script lang="ts">
	    import ContactModal from '$lib/ContactModal.svelte';
    let showModal = false;
    import Footer from '$lib/Footertwo.svelte';
import '../app.postcss';
	import { AppBar, LightSwitch  } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
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

		<!-- App Bar -->

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	  <header class="sticky lg:top-0 z-10 bg-red-5 00/80 backdrop-blur-sm p-1.5">
		
		
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
	   <slot />

	 
	  <!-- Footer -->
	  <footer class=" p-4">

<Footer />
		

	  </footer>
  </div>

<!-- Place the modal at the root of your layout -->
<ContactModal open={showModal} onClose={() => showModal = false} />

  <style>
:global(html) {
  scroll-behavior: smooth;
}
  </style>

