<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut, backOut } from 'svelte/easing';
  import { goto } from '$app/navigation'; // Add this line

  let showChat = false;
  let buttonRect = { top: 0, left: 0, width: 0, height: 0 };

  // Enhanced animation states
  let animating = false;
  const scale = tweened(0, { duration: 600, easing: backOut });
  const opacity = tweened(0, { duration: 500, easing: cubicOut });
  const blur = tweened(10, { duration: 400, easing: cubicOut });
  const contentOpacity = tweened(0, { duration: 300, easing: cubicOut });

  // Open chat with animation on mount
  onMount(() => {
    animating = true;
    showChat = true;
    opacity.set(0.7);
    blur.set(0);
    scale.set(1);
    setTimeout(() => {
      contentOpacity.set(1);
      animating = false;
    }, 300);
  });

  // Home button handler
  function goHome() {
    goto('/');
  }
</script>

<style>
  @keyframes subtleShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  .luxury-button {
    background: linear-gradient(90deg, 
 #78350f 0%, 
      #a16207 50%, 
      #78350f 70%,
      rgba(30, 48, 38, 0.95) 75%, 
      rgba(22, 36, 28, 0.95) 100%);
    background-size: 200% 100%;
    animation: subtleShimmer 8s ease-in-out infinite;
    border: 1px solid rgba(120, 180, 120, 0.5);
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1), 
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(120, 180, 120, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }
  .luxury-button:hover {
    border-color: rgba(120, 180, 120, 0.8);
    box-shadow: 
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 
      0 4px 6px -2px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(120, 180, 120, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  .emerald-bronze-text {
    background: linear-gradient(to right, #e2e3e386, #e9eee9, #e4eae6, #d6ddce, rgb(215, 223, 219));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(0,0,0,0.2);
  }
  .fullscreen-chat {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: white;
    overflow: hidden;
  }
  .chat-container {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
 }

  /* Home button styles */
  .home-btn {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    z-index: 100;
    background: rgba(255,255,255,0.85);
    border: 1px solid #a16207;
    color: #78350f;
    border-radius: 9999px;
    padding: 0.5rem 1.25rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(120, 53, 15, 0.08);
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .home-btn:hover {
    background: #a16207;
    color: #fff;
    box-shadow: 0 4px 16px rgba(120, 53, 15, 0.15);
  }
</style>

<!-- Home Button above chat -->
<button class="home-btn" on:click={goHome}>
  ⬅ &#x1F3E0; 
  <span class=" hidden lg:block">
Home
  </span>
</button>

{#if showChat}
  <div 
    class="chat-container"
    style="
      background-color: rgba(0, 0, 0, {$opacity});
      backdrop-filter: blur({$blur}px);
      transform: scale({$scale});
      transform-origin: bottom right;
    "
  >
    <div 
      class="fullscreen-chat"
      style="opacity: {$contentOpacity};"
    >
      <iframe
        title="chat"
        src="https://bot.voicewave.uk/book-now-tpg7m69"
        style="border: none; width: 100vw; height: 100vh; max-width: 100vw; max-height: 100vh; display: block;"
      ></iframe>
    </div>
  </div>
{/if}