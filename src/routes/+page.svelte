<script>
  import AvailablePrice from './AvailablePrice.svelte';
import Header from './Header.svelte';
    import Steps from './Steps.svelte';
    import WhatComp from './WhatComp.svelte';

    import AboutComp from "./aboutComp.svelte";
    import AboutComp2 from "./aboutComp2.svelte";
    import Grid from './grid.svelte';
    import Skills from "./skills.svelte";

    let headerTitle = "Nangfang Quantou";
    let headerSubtitle = "Martial art that combines strategic targeting, unique training methods, & holistic practices";
    let services = [
      {
        title: "Strategic Targeting",
        description: "Master the skill of precise and controlled strikes.",
        imageUrl: "IMG_1276.jpeg"
      },
      {
        title: "Unique Training Methods",
        description: "Experience a holistic approach to physical and mental discipline.",
        imageUrl: "https://via.placeholder.com/400x300"
      },
      {
        title: "Nine Gates Concept",
        description: "Learn the sophisticated system of targeting the body’s 9 specific areas.",
        imageUrl: "https://via.placeholder.com/400x300"
      },
      {
        title: "Transformative Power",
        description: "Elevate your martial arts journey with our community and ancient wisdom.",
        imageUrl: "https://via.placeholder.com/400x300"
      }
    ];
    

  import { browser } from '$app/env';
</script>

{#if browser}
  <script defer src="http://myumani8.voicewave.uk/script.js" ata-website-id="79856f23-46b8-4073-9c4e-b4b63cbc72d1"></script>
{/if}


  <svelte:head>
    <script defer src="http://myumani8.voicewave.uk/script.js" data-website-id="79856f23-46b8-4073-9c4e-b4b63cbc72d1"></script>
  </svelte:head>
  


  <main class="bg-gree n-500 p-4 space-y-20 rounded-2xl">
    <div class="p-4 rounded">




        <Header></Header>


    </div>
<div id="#about" class=" p-2 mx-4 bg-white/30 border-orange-500 rounded-2xl">


    <div class="lg:p-0.5">
        <div class="max-w -7xl mx-auto">
    



            <div class="max- w-7xl mx-auto">
                <div class="py-5">
                <p class=" text-orange-500 text-lg text-center">Master the Art</p>
        
                <h2 class="text-4xl font-semibold text-center">About Us</h2>
            </div>



    <AboutComp />
    
        </div>
      </div>
    





    </div>
   


    <div class=" p-1.5 hidden bg-white/30 border border-orange-800 rounded-2xl">


        <div class="lg:p-0.5 ">
            <div class="max- w-7xl mx-auto">
                <div class="py-5">
                <p class=" text-orange-500 text-lg text-center">Master the Art</p>
        
                <h2 class="text-4xl font-semibold text-center">Our Services</h2>
            </div>
        <WhatComp />
        
            </div>
          </div>
        
    
    
    
    
    
        </div>
       
    




<div class=" p-1.5 mx -4 my-10 bg-white/30 border border-orange-500 rounded-2xl drop-shadow-2xl shadow-2xl">
    
    <div class="py-5">
        <p class=" text-orange-500 text-lg text-center">Master the Art</p>

        <h2 class="text-4xl font-semibold text-center">??? Steps</h2>
    </div>

    
<Steps />

</div>








<div class=" p-1.5 mx -4  my-10 bg-white/30 border border-orange-500 rounded-2xl drop-shadow-2xl shadow-2xl">

    <p class="pt-5 text-orange-500 text-lg font-semibold text-center">Transform Your Journey </p>

    <h2 class="text-4xl font-semibold text-center mb-12">Martial Arts Training</h2>

<Grid />

</div>







<div class=" p -4">

    <p class="pt-5 text-orange-500 text-lg font-semibold text-center">Choose the right plan for you</p>

    <h2 class="text-4xl font-semibold text-center mb-12">Pricing Plans </h2>


<AvailablePrice />

</div>

<div class="lg:p-4 ">
    <div class="max-w-7xl mx-auto hidden">
        <p class="pt-5 text-orange-500 text-lg font-semibold text-center">Ancient Traditions</p>

        <h2 class="text-4xl font-semibold text-center mb-12">Discover the Art</h2>

<AboutComp2 />

    </div>

  </div>


<p class="h-[512px] bg-purple-500 p-4 hidden">Book Your First Class</p>

</main>
 






 


  

