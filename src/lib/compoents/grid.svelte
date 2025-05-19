<script lang="ts">
    import { fade } from 'svelte/transition';
    let services = [
      {
        title: "Targeted Strikes",
        description: "Develop precision and control through our specialized targeting system.",
        moreinfo: "Master precision with our Nine Gates Targeting System, rooted in Hakka martial wisdom. Learn to strike key energy gates for balance disruption and swift conflict resolution. Blend traditional Southern Fist with modern biomechanics to hone reflexes and control.",
        modaltitle: "Precision Meets Purpose",
        imageUrl: "GrisImg/2tragetstrikes.jpg",
        webpUrl: "GrisImg/tragetstrikes.webp"
      },
      {
        title: "Unique Training Methods",
        description: "Experience a holistic approach to physical and mental discipline.",
        moreinfo: "Step beyond punches with our holistic training. Master Bamboo Forest Mantis techniques, qigong, and 16 Fluid Motions. Sharpen focus with mindfulness, tactical improvisation, and Sarm Bo Gin. Train anywhere—urban or serene—to embody Hakka resilience. No spinning kicks or uniforms. Just results.",
        modaltitle: "Beyond the Dojo",
        imageUrl: "GrisImg/uniquetraining.jpg",
        webpUrl: "GrisImg/uniquetraining.webp"
      },
      {
        title: "Nine Gates Concept",
        description: "Learn the sophisticated system of targeting the body's 9 specific areas.",
        moreinfo: "Master the Nine Gates, a combat system honed over generations. Target nine vulnerable zones—from Crown to Root Gate—with minimal effort for maximum impact. Rooted in Taoist philosophy and Hakka rebel tactics, it turns combat into a dance of energy.",
        modaltitle: "The Science of Efficiency",
        imageUrl: "GrisImg/ninegates.jpg",
        webpUrl: "GrisImg/ninegates.webp"
      },
      {
        title: "Community of Practitioners",
        description: "Join our inclusive community and grow together in your martial arts journey.",
        moreinfo: "Join our global Nangfang Quantou family, uniting martial artists and healers. Embrace inclusivity for all, learn from 8th-generation Shifu Desmond Williams, and grow through workshops and sparring. From graffiti artists to grandmothers, Kung Fu is for everyone. Check ego at the door and rise together.",
        modaltitle: "Grow Together, Rise Together",
        imageUrl: "GrisImg/comunity.JPEG",
        webpUrl: "GrisImg/comunity.webp"
      },
      {
        title: "Mental Awareness",
        description: "Elevate your understanding and connection between mind and body in combat.",
        moreinfo: "Combat starts in the mind. Our curriculum sharpens your mental edge with meditative presence training to stay calm, neuro-kinetic optimization for split-second decisions, and strategic awareness to anticipate opponents' moves like a chessboard. “The stillness between breaths wins battles.”",
        modaltitle: "Mind Over Fist",
        imageUrl: "GrisImg/mentalawareness.jpg",
        webpUrl: "GrisImg/mentalawareness.webp"
      },
      {
        title: "Spiritual Depth",
        description: "Emmerse yourself in the timeless wisdom and spiritual aspects of Kung Fu.",
        moreinfo: "Embrace Kung Fu as a spiritual path. Blend Taoist yin-yang balance and wu wei, Buddhist mindfulness for clarity, and Hakka warrior wisdom from Bamboo Forest Temple. More than a skill, Kung Fu is a journey to awakening.",
        modaltitle: "Kung Fu as a Way of Life",
        imageUrl: "GrisImg/spiritualdepth.jpg",
        webpUrl: "GrisImg/spiritualdepth.webp"
      }
    ];
    
    let activeService = null;
    let imageLoaded = false;
    let modalRef: HTMLDivElement | null = null;

    function openModal(service) {
      activeService = service;
    }
    
    function closeModal() {
      activeService = null;
    }

    $: if (!activeService) imageLoaded = false;

    // Scroll modal into view when it opens
    $: if (activeService && modalRef) {
      setTimeout(() => {
        modalRef?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    }
  </script>
  



















<section class="py-3 bg-orange-900/70 rounded-2xl text-gray-100 sm:py-10">
    <div class="px -4 mx-auto max-w-7xl lg:px -8">
        <div class="max-w-xl mx-auto text-center xl:max-w-3xl">
            <h2 class="text-xl font-bold leading-tight text-gray-50 sm:text-2xl xl:text-4xl mb-6">
          
                Strike with Precision. Train with Purpose.
              
              </h2>
            <p class="mb-4 px-2 text-base">
          Harness ancient wisdom, sharpen your mind, and join a powerful martial arts community.
              </p>

        </div>
        
        <div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-4 text-center gap- y-10 sm:gap-x-12 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-8 sm:text-left">
               
           
                {#each services as service}

                <div data-sveltekit-preload-data="hover" class="relative overflow-hidden hover:cursor-pointer hover:animate-pulse bg-white/90 m-5 shadow-xl drop-shadow-xl rounded-xl" on:click={() => openModal(service)}>
                    
                    
      
                    
                    
                    
                    
                    
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">{service.title}</h3>
                        <p class="mt-6 text-base text-gray-900">
                            {service.description}

                        </p>
                    </div>
                </div>
                {/each}










            </div>

      
        </div>

        {#if activeService}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    on:click={(e) => {
      if (e.target === e.currentTarget) closeModal();
    }}
  >
    <div 
      bind:this={modalRef}
      class="bg-white rounded-xl shadow-xl w-full max-w-md mx-2 p-4 sm:p-8 relative my-8 overflow-y-auto"
      style="max-height: calc(100vh - 2rem);"
    >
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" on:click={closeModal}>&times;</button>
      <h2 class="text-2xl font-bold text-center text-black mb-2">{activeService.title}</h2>
      <div class="w-60 h-60 max-h-60 mx-auto mb-4 relative">
        {#if !imageLoaded}
          <div class="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
        {/if}
        <picture>
          <source srcset={activeService.webpUrl} type="image/webp" />
          <img
            src={activeService.imageUrl}
            alt={activeService.title}
            class="w-60 h-60 max-h-60 mx-auto aspect-auto rounded-2xl shadow-2xl drop-shadow-2xl"
            loading="lazy"
            transition:fade
            on:load={() => imageLoaded = true}
            style="opacity: {imageLoaded ? 1 : 0}; transition: opacity 0.5s;"
          />
        </picture>
      </div>
      <h2 class="text-2xl font-bold text-black mb-2">{activeService.modaltitle}</h2>
      <p class="mb-4 text-black">{activeService.moreinfo}</p>
      <button class="mt-2 px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-800" on:click={closeModal}>
        Close
      </button>
    </div>
  </div>
{/if}
</section>