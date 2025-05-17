<script lang="ts">
import AvailablePrice from './AvailablePrice.svelte';
import Header from './Header.svelte';
import Steps from './Steps.svelte';
import WhatComp from './WhatComp.svelte';
import AboutComp from "./aboutComp.svelte";
import AboutComp2 from "./aboutComp2.svelte";
import Grid from './grid.svelte';
import AutoAiCenterComp from '$lib/AutoAiCenterCompOrig.svelte';
</script>

  <main class="bg-gree n-500 p-4 space-y-20 rounded-2xl">
    <div class="p-4 rounded">

        <Header />

    </div>
<div id="about" class=" p-2 mx-20 bg-white/30  border-orange-800 rounded-2xl">

    <div class="lg:p-0.5 hidden">
    
            <div class="max-w-7xl mx-auto">
                <div class="pb-5">
                <p class=" text-orange-500 text-lg text-center">Master the Art</p>
        
                <h2 class="text-4xl font-semibold text-center">About Us</h2>
            </div>

    <AboutComp />
    
      </div>
    





    </div>
   

    
<div class="py-5 bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           
           
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium bg-black/70 text-white">
                    <p class=" text-orange-500 text-base text-center">Master the Art</p>

        About Us
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
           
           
           
            </div>


    <div class=" p-1.5 hi dden max-w-7xl mx-auto bg-white/30 border border-orange-800 rounded-2xl">





        


        <div class="lg:p -0.5">
            <div class="max-w-7xl mx-auto">
            
                <AboutComp />

            </div>
          </div>
  
    
        </div>
       
    




        



<div class=" p-1.5 mx -4 my-10 bg-white/30 border hidden border-orange-500 rounded-2xl drop-shadow-2xl shadow-2xl">
    
    <div class="py-5">
        <p class=" text-orange-500/60 text-lg text-center">Master the Art</p>

        <h2 class="text-4xl font-semibold text-center">Steps to Master</h2>
    </div>

    
<Steps />

</div>







    <div class="py-5 bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           
           
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium bg-black/70 text-white">
                    <p class=" text-orange-500 text-base text-center">
                                Transform Your Journey 



                    </p>

        Services
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
           
           
           
            </div>





<div id="services" class=" p-1.5 mx -20  mb -10 max-w-7xl mx-auto bg-white/30 border border-orange-500 rounded-2xl drop-shadow-2xl shadow-2xl">

<Grid />

</div>







<div class=" p -4" id="courses">





    <div class="py-5 bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           
           
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium bg-black/70 text-white">
                    <p class=" text-orange-500 text-base text-center">
Choose the right course for you

                    </p>

            Courses 
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
           
           
           
            </div>










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
</div>

</main>


<AutoAiCenterComp />