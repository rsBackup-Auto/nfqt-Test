<script lang="ts">
    import { fade } from 'svelte/transition';
    import { tick } from 'svelte';
    type Service = {
      title: string;
      description: string;
      moreinfo: string;
      modaltitle: string;
      imageUrl: string;
      webpUrl: string;
    };

    let services: Service[] = [
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
    
    let activeService: Service | null = null;
    let imageLoaded = false;
    let modalRef: HTMLDivElement | null = null;
    let lastFocused: HTMLElement | null = null;

    function openModal(service: Service) {
      lastFocused = document.activeElement as HTMLElement | null;
      activeService = service;
      tick().then(() => {
        modalRef?.focus();
      });
    }
    
    function closeModal() {
      activeService = null;
      setTimeout(() => {
        try {
          lastFocused?.focus?.();
        } catch (e) {
          // ignore
        }
      }, 0);
    }

    function handleCardKey(e: KeyboardEvent, service: Service) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lastFocused = e.currentTarget as HTMLElement;
        openModal(service);
      }
    }

    function handleModalKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab' && modalRef) {
        const focusable = Array.from(modalRef.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )) as HTMLElement[];
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement;
        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    $: if (!activeService) imageLoaded = false;

    $: if (activeService && modalRef) {
      setTimeout(() => {
        modalRef?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
    }
  </script>

<section class="py-6 bg-orange-900/70 rounded-2xl text-gray-100 sm:py-10">
  <div class="px-4 mx-auto max-w-7xl">
    <div class="max-w-xl mx-auto text-center xl:max-w-3xl">
      <h2 class="text-3xl font-bold leading-tight text-gray-50 mb-4">Strike with Precision. Train with Purpose.</h2>
      <p class="mb-6 px-2 text-base text-gray-100/90">Harness ancient wisdom, sharpen your mind, and join a powerful martial arts community.</p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {#each services as service (service.title)}
        <article class="card bg-white/90 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-200 cursor-pointer" on:click={() => openModal(service)} tabindex="0" on:keydown={(e) => handleCardKey(e, service)}>
          <div class="relative h-44 md:h-56 w-full overflow-hidden">
            <img src={service.webpUrl} alt={service.title} class="img-default w-full h-full object-cover" loading="lazy" />

            <img src={service.imageUrl} alt={`${service.title} hover`} class="img-hover absolute inset-0 w-full h-full object-cover" loading="lazy" />

            
            <div class="image-info absolute left-0 bottom-0 w-full px-4 py-2 text-white">
              <div class="text-sm font-semibold">{service.title}</div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
            <p class="mt-3 text-lg text-gray-900 dark:text-gray-400">{service.description}</p>
            <div class="mt-4">
              <button class="inline-block px-3 py-1 text-sm bg-orange-700 text-white rounded-md">Learn more</button>
            </div>
          </div>
        </article>
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
        role="dialog"
        aria-modal="true"
        aria-label={activeService.title}
        tabindex="-1"
        class="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-2 p-4 sm:p-8 relative my-8 overflow-y-auto"
        style="max-height: calc(100vh - 2rem);"
        on:keydown={handleModalKeydown}
      >
        <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" on:click={closeModal}>&times;</button>
        <h2 class="text-2xl font-bold text-center text-black mb-2">{activeService.title}</h2>
        <div class="w-full max-h-96 mx-auto mb-4">
          {#if !imageLoaded}
            <div class="w-full h-56 bg-gray-200 animate-pulse rounded-2xl"></div>
          {/if}
          <picture>
            <source srcset={activeService.webpUrl} type="image/webp" />
            <img
              src={activeService.imageUrl}
              alt={activeService.title}
              class="w-full max-h-96 object-cover rounded-2xl shadow-2xl drop-shadow-2xl"
              loading="lazy"
              transition:fade
              on:load={() => imageLoaded = true}
              style="opacity: {imageLoaded ? 1 : 0}; transition: opacity 0.4s;"
            />
          </picture>
        </div>
        <h2 class="text-2xl font-bold text-black mb-2">{activeService.modaltitle}</h2>
        <p class="mb-4 text-black ">{activeService.moreinfo}</p>
        <button class="mt-2 px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-800" on:click={closeModal}>
          Close
        </button>
      </div>
    </div>
  {/if}
</section>

<style>
  .card { display: flex; flex-direction: column; }
  .card .img-default {
    transition: transform 300ms ease, filter 300ms ease, opacity 300ms ease;
    will-change: transform, filter, opacity;
  }
  .card .img-hover {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(110%);
    opacity: 0;
    transition: transform 350ms cubic-bezier(.22,.9,.35,1), opacity 250ms ease;
    will-change: transform, opacity;
  }

  .card:hover .img-hover {
    transform: translateX(0%);
    opacity: 1;
  }
  .card:hover .img-default {
    transform: scale(0.96);
    filter: blur(2px) saturate(.9);
    opacity: 0.6;
  }

  .card .image-info {
    background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.6));
    transform: translateY(40%);
    opacity: 0;
    transition: transform 300ms ease, opacity 300ms ease;
  }
  .card:hover .image-info {
    transform: translateY(0%);
    opacity: 1;
  }

  .overlay { pointer-events: none; }
</style>