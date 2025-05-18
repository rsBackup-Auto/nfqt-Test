<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut, backOut } from 'svelte/easing';
  import { goto } from '$app/navigation'; // Add this line

  let showChat = false;
  let animating = false;

  // Enhanced animation states
  const scale = tweened(0, { duration: 600, easing: backOut });
  const opacity = tweened(0, { duration: 500, easing: cubicOut });
  const blur = tweened(10, { duration: 400, easing: cubicOut });
  const contentOpacity = tweened(0, { duration: 300, easing: cubicOut });

  // Open chat with animation on mount
  onMount(() => {
    openChat();
  });

  function openChat() {
    animating = true;
    showChat = true;
    opacity.set(0.7);
    blur.set(0);
    scale.set(1);
    setTimeout(() => {
      contentOpacity.set(1);
      animating = false;
    }, 400); // Wait for content opacity to finish
  }

  function closeChat() {
    animating = true;
    contentOpacity.set(0); // Fade out content first
    setTimeout(() => {
      opacity.set(0); // Fade out background
      blur.set(10); // Add blur back
      scale.set(0.9); // Slightly shrink before disappearing
    }, 200); // Stagger animations for smoothness
    setTimeout(() => {
      showChat = false; // Remove chat after animations
      animating = false;
    }, 500); // Wait for all animations to complete
  }

  // Home button handler
  function goHome() {
    closeChat();
    setTimeout(() => goto('/'), 800); // Navigate after animation
  }
</script>

<style>
  @keyframes subtleShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
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