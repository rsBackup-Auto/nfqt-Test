<script>
    import AboutComp from "./aboutComp.svelte";
    import AboutComp2 from "./aboutComp2.svelte";
    import Skills from "./skills.svelte";
    import StartBut from "./StartBut.svelte";

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
    
  </script>


<!-- component -->
<section class="bg-center bg-no-repeat bg-cover bg-[url('pexels-photo-734102.jpeg')] bg-gray-500/50 bg-blend-multiply rounded-xl drop-shadow-2xl shadow-2xl">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mx-12 text-4xl font-ext rabold tracking-tight leading-none text-white md:text-4xl lg:text-6xl">Discover the Timeless Art of Bamboo Forest Temple Mantis Kung Fu</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 hidden">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        
        

        <div class="header-bg h-80 flex  flex-col items-center justify-center">
            <div class="bg-white/60  p-2.5 rounded-lg text-center shadow-lg mx-16">
              <h1 class="text-3xl lg:text-4xl font-bold text-black/80 p-2 uppercase">{headerTitle}</h1>
        

      

            </div>
            
            <p class="text-lg mb-3 text-white pt-4">{headerSubtitle}</p>

        
        
          </div>
        
        
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
       


<StartBut />
















            <a href="#" class="inline-flex justify-center text-white hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Meet Our Community
            </a>  
        </div>

        
  
    </div>
</section>




