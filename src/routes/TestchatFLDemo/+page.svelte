<script>
import Chat from "$lib/ChatFL.svelte";
import { onMount } from 'svelte';

onMount(() => {
  // Load custom script for chat logo
  const script = document.createElement('script');
  script.src = '/fl-chat-custom.js';
  document.head.appendChild(script);
});
</script>

<!-- Add a div with the logo before the chat -->
<div style="position: fixed; bottom: 80px; right: 20px; z-index: 1000; pointer-events: none;">
  <img src="https://fandlkitchens.co.uk/logonew_119x92.png" alt="F&L Kitchens Logo" style="width: 80px; height: auto;" />
</div>

<Chat />