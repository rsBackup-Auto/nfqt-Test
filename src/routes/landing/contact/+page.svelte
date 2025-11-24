<script lang="ts">
  import FORMss from '$lib/Land/FORMss.svelte';
    import Social from "$lib/compoents/social.svelte";

     import Headerland from '$lib/Land/Headerland.svelte';
</script>
<main class="p-4 max-w-6xl mx-auto">
      <div class="p-1 lg:p-4 rounded">

        <Headerland />

    </div>


  <h1 class="text-2xl font-bold mt-6 text-center">Contact Us</h1>
  
       <div>

            <h1 class="mt-2 text-2xl font-semibold text-center  md:text-3xl text-white">We'd love to hear from you</h1>
        </div>
        <Social />
  <p class="mt-2 text-gray-600 text-center">Use the form below to get in touch or book a trial class.</p>
  <div class="mt-6">
    <FORMss/>
  </div>
</main>