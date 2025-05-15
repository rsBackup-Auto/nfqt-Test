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
        imageUrl: "https://via.placeholder.com/400x300",
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
        imageUrl: "https://via.placeholder.com/400x300",
      },
      {
        title: "Mental Awareness",
        description: "Elevate your understanding and connection between mind and body in combat.",
        moreinfo: "Combat begins in the mind. Our curriculum sharpens your mental edge through:	Presence Training: Meditative drills to stay calm under pressure. Neuro-Kinetic Optimization: Syncing thought and action for split-second decisions. Strategic Awareness: Learn to “read” opponents like a chessboard, anticipating moves before they happen.“The stillness between breaths is where battles are won.”",
        modaltitle: "Mind Over Fist",
        imageUrl: "https://via.placeholder.com/400x300",
      },
      {
        title: "Spiritual Depth",
        description: "Emmerse yourself in the timeless wisdom and spiritual aspects of Kung Fu.",
        moreinfo: "Immerse yourself in the spiritual roots of martial arts. Our teachings intertwine:	Taoist Principles: Balance yin and yang, flow with wu wei (effortless action). Buddhist Mindfulness: Transform fear into clarity through Zen-inspired practices. Ancestral Wisdom: Connect to the legacy of Hakka warriors and Bamboo Forest Temple monks. Kung Fu isn’t just a skill—it’s a path to awakening.",
        modaltitle: "Kung Fu as a Way of Life",
        imageUrl: "https://via.placeholder.com/400x300",
  
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

                <div class="relative overflow-hidden hover:cursor-pointer hover:animate-pulse bg-white shadow-md rounded-xl" on:click={() => openModal(service)}>
                    
                    
                    
                    <div
                    class="hidden mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full  shadow-lg  {service.colour}">
                    <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
                      <path
                        d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                        fill="white"></path>
                    </svg>
                  </div>
          
                    
                    
                    
                    
                    
                    
                    
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
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-8 relative">
            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" on:click={closeModal}>&times;</button>
                        <h2 class="text-2xl font-bold text-center text-black mb-2">{activeService.title}</h2>
            <img src={activeService.imageUrl} alt={activeService.title} class="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 class="text-2xl font-bold text-black mb-2">{activeService.modaltitle}</h2>
            <p class="mb-4 text-black">{activeService.moreinfo}</p>
            <button class="mt-2 px-4 py-2 bg-orange-700 text-white rounded hover:bg-orange-800" on:click={closeModal}>
              Close
            </button>
          </div>
        </div>
      {/if}
</section>