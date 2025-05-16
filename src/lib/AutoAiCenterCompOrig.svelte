<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  
  let showChat = false;
  let buttonElement;
  let buttonText = 'Start a Chat';
  let chatLogo = '/image0.jpeg';
  let chatTitle = 'Nangfang Quantou';
  let chatElement;
  let iframeElement;
  let buttonRect = { top: 0, left: 0, width: 0, height: 0 };
  
  // Animation state
  let animating = false;
  const scale = tweened(0, { duration: 400, easing: cubicOut });
  const opacity = tweened(0, { duration: 300, easing: cubicOut });
  
  // Base URL for the chat
  const baseUrl = 'https://bot.voicewave.uk/nfqt-2';
  
  function toggleChat() {
    if (animating) return;
    
    if (!showChat) {
      // Opening chat
      animating = true;
      showChat = true;
      
      // Prevent body scrolling when chat is open
      document.body.style.overflow = 'hidden';
      
      // Get button position for animation origin
      buttonRect = buttonElement.getBoundingClientRect();
      
      // Start animation
      scale.set(1);
      opacity.set(1).then(() => {
        animating = false;
      });
    } else {
      // Closing chat
      animating = true;
      
      // Re-enable scrolling
      document.body.style.overflow = '';
      
      // Reverse animation
      scale.set(0);
      opacity.set(0).then(() => {
        showChat = false;
        animating = false;
      });
    }
  }
  
  function closeChat() {
    if (!animating && showChat) {
      animating = true;
      
      // Re-enable scrolling
      document.body.style.overflow = '';
      
      scale.set(0);
      opacity.set(0).then(() => {
        showChat = false;
        animating = false;
      });
    }
  }
  
  onMount(() => {
    // Ensure we have the initial button position
    if (buttonElement) {
      buttonRect = buttonElement.getBoundingClientRect();
    }
    
    // Clean up when component is destroyed
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>


<!-- Luxury Chat Toggle Button -->
<div class="fixed bottom-0 right-0 w-full md:bottom-4 md:right-4 md:w-auto z-50">
  <div 
    bind:this={buttonElement}
    class="luxury-button bg-[#ac6e2c] text-white border border-yellow-400 shadow-lg shadow-yellow-400/40 text-sm p-4 md:rounded-lg flex justify-between items-center border-pulse transition-all duration-300"
  >
    <div class="flex items-center">
      <span class="inline-block mr-2 transition-transform duration-700 hover:rotate-12">
        <!-- You can update the SVG icon color to yellow as well -->
        <svg class="w-5 h-5" fill="currentColor" style="color: #;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
        </svg>
      </span>
      <a class="font-medium tracking-wide cursor-pointer transition-all duration-300 hover:tracking-wider text-white font-bold" on:click={toggleChat}>
        {buttonText}
      </a>
    </div>
    <button class="text-white hover:text-yellow-400 ml-5 transition-all duration-300 transform hover:scale-110" on:click={toggleChat}>
      <span class="sr-only">Toggle Chat</span>
      <svg class="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
        <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
      </svg>
    </button>
  </div>
</div>

{#if showChat}
  <!-- Overlay with grow animation -->
  <div 
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
    style="opacity: {$opacity};"
    role="button"
    tabindex="0"
    on:click={closeChat}
    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeChat(); }}
  ></div>
  
  <!-- Chat window with grow animation -->
  <div 
    bind:this={chatElement}
    class="fixed z-50 bottom-0 right-0 md:bottom-24 md:right-8"
  >
    <div 
      class="chat-window relative bg-orange-400 border border-yellow-400 rounded-2xl w-full h-full md:w-[400px] md:h-[600px] shadow-2xl shadow-yellow-400/40 chat-3d-effect"
      style="
        transform: scale({$scale});
        transform-origin: bottom right;
        opacity: {$opacity};
      "
      on:click|stopPropagation
    >
      <!-- Chat Container with Header -->
      <div class="chat-container-flex">
        <!-- Chat Header -->
        <div class="chat-header p-4 flex items-center border-b border-yellow-400 rounded-t-2xl shadow-orange-400/20">
          <!-- Avatar -->
          <div class="avatar w-10 h-10 flex items-center rounded-lg justify-center mr-3 bg-yellow-400">
           
<img class="w-10 h-10 rounded-lg" src={chatLogo} alt="Nfqt Logo" />
            
          </div>
          
          <!-- User Info -->
          <div class="flex-1 select-none">
            <h3 class="text-white  font-bold">{chatTitle}</h3>
            <p class="text-white text-xs">Online | Ready to help</p>
          </div>
          
          <!-- Header Actions -->
          <div 
          class="flex space-x-3">
       
            <button class="text-white hover:text-yellow-300 transition-colors">
              <a 
                href='https://wa.me/447780116170'
                target="_blank" 
                rel="noopener noreferrer" 
                type="button">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>
            </button>
            
            <!-- Luxury Close Button -->
            <button
              class="text-white hover:text-yellow-300 transition-colors"
              on:click={closeChat}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Iframe Container -->
        <div class="iframe-container">
          <!-- Direct iframe without session parameters -->
          <iframe
            bind:this={iframeElement}
            title="chat"
            src={baseUrl}
            style="border: none; width: 100%; height: 100%; border-radius: 0 0 1rem 1rem; color: #fde047;"
            allow="microphone; camera"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes subtleShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  

  .luxury-button:hover {
    border-color: #fde047; /* yellow-400 */
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      0 0 0 1px #fde047,
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .chat-container-flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }
  
  .chat-header {
    background: #ac6e2c;
    border-bottom: 1px solid #fde047;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 2px 10px rgba(253, 224, 71, 0.1);
  }
  
  .avatar {
    position: relative;
    background: #fde047;
    box-shadow: 
      0 2px 6px rgba(0, 0, 0, 0.2),
      0 0 0 2px rgba(253, 224, 71, 0.1);
  }
  
  .avatar::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #4ADE80;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    border: 2px solid #000;
  }
  
  .iframe-container {
    flex: 1;
    overflow: hidden;
  }
  
  /* 3D effect for chat window */
  .chat-3d-effect {
    transform: perspective(1000px) rotateX(0deg);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .chat-3d-effect:hover {
    transform: perspective(1000px) rotateX(2deg);
  }
     .border-pulse {
    animation: borderPulse 2s infinite;
  }
    @keyframes borderPulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
  }
</style>
