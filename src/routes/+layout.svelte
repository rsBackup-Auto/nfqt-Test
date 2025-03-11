<script lang="ts">
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
			
		},
		{
			title: "Contact Us",
			
		}
	];
</script>


<svelte:head>
    <script defer src="http://myumani8.voicewave.uk/script.js" data-website-id="79856f23-46b8-4073-9c4e-b4b63cbc72d1"></script>
  </svelte:head>
  

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
			<a href="{button.url}" id="{button.Butid}" class="btn btn-sm inline-flex items-center hover:bg-orange-700/50 justify -center h-8 px-2 py-0  text-center dark:border-orange-500/30  no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
				{button.title}
			</a>
{/each}
				<LightSwitch />

			</svelte:fragment>
		</AppBar>
	<!-- Page Route Content -->

	
	
	
	</header>
	  <!-- Main -->	<slot />

	 
	  <!-- Footer -->
	  <footer class=" p-4">
<p class="   text-center">
	(

	©
	
	Nangfang Quantou
	)

</p>

	  </footer>
  </div>
  <style>
	html {
  scroll-behavior: smooth;
}
  </style>
  
