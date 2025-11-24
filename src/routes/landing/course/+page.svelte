<script lang="ts">
import AvailablePrice from '$lib/Land/AvailablePriceLand.svelte';

     import Headerland from '$lib/Land/Headerland.svelte';
</script>
<main class="p-4 max-w-6xl mx-auto">
      <div class="p-1 lg:p-4 rounded">

        <Headerland />

    </div>


  <h1 class="text-2xl font-bold mt-6 text-center">Available Courses</h1>
  
       <div>

            <h1 class="mt-2 text-2xl font-semibold text-center  md:text-3xl text-white">
              Choose the right course for you

            </h1>
        </div>
  <div class="mt-6">

<AvailablePrice />

  </div>
</main>