<script lang="ts">

    let services = [
      {
        title: "Targeted Strikes",
        description: "Develop precision and control through our specialized targeting system.",
        moreinfo: "Master the art of precision with our Nine Gates Targeting System, derived from centuries-old Hakka martial wisdom. Learn to strike with surgical accuracy, focusing on the body’s nine key energy gates to disrupt balance, control opponents, and end conflicts swiftly. Whether in self-defence or sparring, our drills blend traditional Southern Fist techniques with modern biomechanics to sharpen your reflexes and cultivate unshakable control.'A warrior’s strength lies not in force, but in knowing where to strike' — Shifu Desmond Williams",
        modaltitle: "Precision Meets Purpose",
        imageUrl: "IMG_1276.jpeg",
      },
      {
        title: "Unique Training Methods",
        description: "Experience a holistic approach to physical and mental discipline.",
        moreinfo: "Step into a training philosophy that transcends punches and kicks. Our holistic approach integrates:	Physical Mastery: Bamboo Forest Temple Mantis techniques, qigong breathing, and dynamic forms like the 16 Fluid Motions.	Mental Discipline: Mindfulness drills, tactical improvisation, and the Sarm Bo Gin (Three-Step Arrow) for razor-sharp focus. Adaptability: Train across environments—from urban landscapes to serene gardens—to embody the resilience of Hakka warriors.No spinning kicks. No rigid uniforms. Just results.",
        modaltitle: "Beyond the Dojo",
        imageUrl: "GrisImg/uniquetraining.jpg",
      },
      {
        title: "Nine Gates Concept",
        description: "Learn the sophisticated system of targeting the body’s 9 specific areas.",
        moreinfo: "Unlock the secrets of the Nine Gates, a strategic combat framework refined over eight generations. This system teaches you to exploit the body’s nine vulnerable zones—from the Crown Gate (top of the head) to the Root Gate (base of the spine)—using minimal effort for maximum impact. Rooted in Taoist philosophy and battlefield-tested by Hakka rebels, the Nine Gates transform combat into a dance of energy and intention.“Why waste ten strikes when one will suffice?”",
        modaltitle: "The Science of Efficiency",
        imageUrl: "https://via.placeholder.com/400x300",
        colour:"bg-sky-500 shadow-sky-500/40"
      },
      {
        title: "Community of Practitioners",
        description: "Join our inclusive community and grow together in your martial arts journey.",
        moreinfo: "Join a global family of martial artists, healers, and seekers united by the Nangfang Quantou ethos. Our community thrives on: Inclusivity: All ages, backgrounds, and skill levels welcome. Mentorship: Learn directly from 8th-generation lineage holder Shifu Desmond Williams. Shared Journeys: Workshops, retreats, and sparring circles where ego is checked at the door. From graffiti artists to grandmothers, we believe Kung Fu is for everyone.",
        modaltitle: "Grow Together, Rise Together",
        imageUrl: "GrisImg/comunity.JPEG",
      },
      {
        title: "Mental Awareness",
        description: "Elevate your understanding and connection between mind and body in combat.",
        moreinfo: "Combat begins in the mind. Our curriculum sharpens your mental edge through:	Presence Training: Meditative drills to stay calm under pressure. Neuro-Kinetic Optimization: Syncing thought and action for split-second decisions. Strategic Awareness: Learn to “read” opponents like a chessboard, anticipating moves before they happen.“The stillness between breaths is where battles are won.”",
        modaltitle: "Mind Over Fist",
        imageUrl: "GrisImg/mentalawareness.jpg",
      },
      {
        title: "Spiritual Depth",
        description: "Emmerse yourself in the timeless wisdom and spiritual aspects of Kung Fu.",
        moreinfo: "Immerse yourself in the spiritual roots of martial arts. Our teachings intertwine:	Taoist Principles: Balance yin and yang, flow with wu wei (effortless action). Buddhist Mindfulness: Transform fear into clarity through Zen-inspired practices. Ancestral Wisdom: Connect to the legacy of Hakka warriors and Bamboo Forest Temple monks. Kung Fu isn’t just a skill—it’s a path to awakening.",
        modaltitle: "Kung Fu as a Way of Life",
        imageUrl: "GrisImg/spiritualdepth.jpg",
  
      }
    ];
    
    let activeService = null; // Track which service's modal is open

    function openModal(service) {
      activeService = service;
    }
    
    function closeModal() {
      activeService = null;
    }
    
  </script>
  



















<section class="py-12 bg-orange-900/70 rounded-2xl text-gray-100 sm:py-12 lg:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p class="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>

        </div>
        
        <div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
               
           
                {#each services as service}

                <div data-sveltekit-preload-data="hover" class="relative overflow-hidden hover:cursor-pointer hover:animate-pulse bg-white shadow-md rounded-xl" on:click={() => openModal(service)}>
                    
                    
      
                    
                    
                    
                    
                    
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
                        <p class="mt-6 text-base text-gray-600">
                            {service.description}

                        </p>
                    </div>
                </div>
                {/each}










            </div>

      
        </div>

        {#if activeService}
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-auto">
          <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" on:click={closeModal}>&times;</button>
                        <h2 class="text-2xl font-bold text-center text-black mb-2">{activeService.title}</h2>
            <img src={activeService.imageUrl} alt={activeService.title} class="w-60 h-60 max-h-60    mx-auto aspect-auto rounded-2xl shadow-2xl drop-shadow-2xl mb-4" />
            <h2 class="text-2xl font-bold text-black mb-2">{activeService.modaltitle}</h2>
            <p class="mb-4 text-black">{activeService.moreinfo}</p>
            <button class="mt-2 px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-800" on:click={closeModal}>
              Close
            </button>
          </div>
        </div>
      {/if}
</section>