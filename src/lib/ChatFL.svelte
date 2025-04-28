<script lang="ts">
	import '@n8n/chat/style.css';
	// Import custom styles for F&L Kitchens chat
	import '$lib/fl-chat-styles-optimized.css';


	import { createChat } from '@n8n/chat';
	import { onMount } from 'svelte';

	
	// Chat initialization flag for performance
	let chatInitialized = false;

	onMount(() => {
		// Initialize chat with slight delay to improve page load performance
		setTimeout(() => {
			if (!chatInitialized) {
				initializeChat();
			}
		}, 100);
	});

	// Function to initialize chat - separated for performance
	function initializeChat() {
		chatInitialized = true;

		createChat({
			webhookUrl: 'https://n8n.srv766038.hstgr.cloud/webhook/949050be-b086-472d-b86f-d6de855fe0cb/chat',
			webhookConfig: {
				method: 'POST',
				headers: {}
			},
			target: '#n8n-chat',
			mode: 'window',
			chatInputKey: 'chatInput',
			chatSessionKey: 'sessionId',
			metadata: {},

			showWelcomeScreen: false,
			defaultLanguage: 'en',
			// Combined welcome messages for faster initial load
			initialMessages: [
				'Welcome to F&L Kitchens! 👋',
				'We specialize in creating luxury kitchens tailored to your needs and style.',
				'How can we help you design your Dream kitchen today?'
			],
			i18n: {
				en: {
					title: 'F&L Kitchens',
					subtitle: "Luxury Kitchen Specialists",
					footer: 'F&L Kitchens - Quality & Excellence',
					getStarted: 'Start Conversation',
					inputPlaceholder: 'Ask us about your dream kitchen...',
					closeButtonTooltip:'Close chat',
				},
			},
		});
	}



	</script>
	    <!-- Widget Configuration -->

	<style>

:root {
	--chat--color-primary: #ffcc00; /* Yellow primary color */
	--chat--color-header: #0000007d; /* Yellow primary color */

	--chat--color-primary-shade-50: #e6b800; /* Slightly darker yellow */
	--chat--color-primary-shade-100: #cca300; /* Even darker yellow */
	--chat--color-secondary: #ffcc00; /* Yellow secondary color */
	--chat--color-secondary-shade-50: #e6b800; /* Slightly darker yellow */
	--chat--color-white: #ffffff;
	--chat--color-light: #ffffff; /* Yellow text color */
	--chat--color-light-shade-50: #e6b800;
	--chat--color-light-shade-100: #cca300;
	--chat--color-medium: #d2d4d9;
	--chat--color-dark: #000000; /* Black background */
	--chat--color-disabled: #777980;
	--chat--color-typing: #080808; /* Yellow typing indicator */
	--chat--color-yellow: #ffcc00; /* Yellow typing indicator */

	--chat--spacing: 1rem;
	--chat--border-radius: 0.25rem;
	--chat--transition-duration: 0.15s;

	--chat--window--width: 400px;
	--chat--window--height: 600px;

	--chat--header-height: auto;
	--chat--header--padding: var(--chat--spacing);
	--chat--header--background: var(--chat--color-header); /* Yellow background for header */
	--chat--header--color: var(--chat--color-yellow); /* Black text for header */
	--chat--header--border-top: none;
	--chat--header--border-bottom: 1px solid var(--chat--color-dark); /* Black border */
	--chat--heading--font-size: 1.8em;
	--chat--subtitle--font-size: inherit;
	--chat--subtitle--line-height: 1.8;

	/* Custom header with logo */
	--chat--header--background-image: url('/logonew_119x92.png');
	--chat--header--background-size: 60px;
	--chat--header--background-repeat: no-repeat;
	--chat--header--background-position: 10px center;
	--chat--header--padding-left: 80px; /* Make room for the logo */

	--chat--textarea--height: 50px;

	--chat--message--font-size: 1rem; /* Increased font size */
	--chat--message--padding: 1.2rem; /* Increased padding for more space */
	--chat--message--border-radius: 1.5rem; /* Much more rounded bubbles */
	--chat--message-line-height: 1.5; /* Better line height for text */
	--chat--message--bot--background: var(--chat--color-primary); /* Yellow background for bot messages */
	--chat--message--bot--color: var(--chat--color-dark); /* Black text for bot messages */
	--chat--message--bot--border: none; /* No border for bot messages */
	--chat--message--user--background: var(--chat--color-dark); /* Black background for user messages */
	--chat--message--user--color: var(--chat--color-white); /* White text for user messages */
	--chat--message--user--border: none;
	--chat--message--pre--background: rgba(255, 204, 0, 0.1); /* Light yellow background for code blocks */
	--chat--message--max-width: 85%; /* Prevent messages from stretching too wide */
	--chat--message--word-break: break-word; /* Prevent text overflow */
	--chat--message--word-wrap: break-word; /* Better text wrapping */

	--chat--toggle--background: var(--chat--color-dark); /* Black background for toggle */
	--chat--toggle--hover--background: #333333; /* Slightly lighter black on hover */
	--chat--toggle--active--background: #444444; /* Even lighter black when active */
	--chat--toggle--color: var(--chat--color-primary); /* Yellow icon color */
	--chat--toggle--size: 70px; /* Slightly larger toggle button */
	--chat--toggle--border: 2px solid var(--chat--color-primary); /* Yellow border */
	--chat--toggle--box-shadow: 0 0 10px rgba(255, 204, 0, 0.5); /* Yellow glow effect */
}
	</style>