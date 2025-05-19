<script lang="ts">
import AvailablePrice from '$lib/compoents/AvailablePrice.svelte';
import Header from '$lib/compoents/Header.svelte';
import Grid from '$lib/compoents/grid.svelte';
import AutoAiCenterComp from '$lib/compoents/AutoAiCenterCompOrig.svelte';
import AboutCompnew from '$lib/compoents/AboutCompnew.svelte';
    let headerTitle = "About Us";

</script>

<main class="bg-gree n-500 md:p -4 space-y-8 rounded-2xl">
    <div class="p-1 lg:p-4 rounded">

        <Header />

    </div>

    <div  class=" p-2 md:mx-20 bg-white/30  border-orange-800 rounded-2xl">
    
<div id="about" class="py-5  dark:bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium dark:bg-black/70 bg-white/30 drop-shadow-2xl shadow-2xl">
                    <p class=" text-orange-500 text-base text-center">Master the Art</p>

        About Us
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
           
           
           
            </div>


    <div class=" p-1.5 hi dden max-w-7xl mx-auto bg-white/30 border border-orange-800 rounded-2xl">





        


        <div class="lg:p -0.5">
            <div class="max-w-7xl mx-auto">
            
                <AboutCompnew />

            </div>
          </div>
  
    
        </div>
       
    




        







    <div id="services" class="py-5 dark:bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           
           
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium dark:bg-black/70 bg-white/30 drop-shadow-2xl shadow-2xl">
                    <p class=" text-orange-500 text-base text-center">
                                Transform Your Journey 



                    </p>

        Services
    </span>
    <span class="flex-grow block border-t border-black"></span>
</h2>
           
           
           
            </div>





<div  class=" p-1.5 mx -20  mb -10 max-w-7xl mx-auto bg-white/30 border border-orange-500 rounded-2xl drop-shadow-2xl shadow-2xl">

<Grid />

</div>







<div class=" p -4" id="courses">





    <div class="py-5 dark:bg-orange-800/5 rounded-2xl mx- 80 max-w-lg mx-auto text-center">
            
           
           
           <h2 class="flex flex-row flex-nowrap items-center mt-2">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-4xl rounded leading-none font-medium dark:bg-black/70 bg-white/30 drop-shadow-2xl shadow-2xl">
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

    </div>

  </div>

<p class="h-[512px] bg-purple-500 p-4 hidden">Book Your First Class</p>
</div>

</main>


<AutoAiCenterComp />