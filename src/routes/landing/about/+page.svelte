<script lang="ts">
    import Headerland from '$lib/Land/Headerland.svelte';
</script>

<main class="md:p-4 space-y-8 rounded-2xl">
    <div class="p-1 lg:p-4 rounded">

        <Headerland />

    </div>

  <div class="p-2 md:mx-20 bg-white/30 border-orange-800 rounded-2xl">
    <section class="bg-gray-100/40 bg-gradient-to-br from-teal-50 via-blue-200/30 to-orange-100/30 rounded-2xl drop-shadow-2xl shadow-2xl">
      <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div class="max-w-lg text-center">
            <h2 class="text-3xl  font-black text-gray-900 sm:text-4xl">About Us</h2>
            <p class="mt-4 text-gray-600 font-bold dark:text-black text-xl">
              At Nangfang Quantou, we guide you on the Great Path with Bamboo Forest Mantis. Beyond techniques, we forge warriors through movement, meditation, and ancient wisdom. Our holistic practice sharpens your body, clears your mind, and awakens your chi, reconnecting you to your truest self. Embrace a lifestyle of mastery, where every strike and breath fuels transformation.
            </p>
            <div class="mt-8">
              <a href="/" class="text-blue-500 hover:text-blue-600 hidden font-medium">Learn more about us
                <span class="ml-2">&#8594;</span></a>
            </div>
          </div>
          <div class="mt-4 md:mt-0">
            <img src="/GrisImg/about5.png" alt="About Us" class="object-cover border border-black rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </section>
  </div>
</main>