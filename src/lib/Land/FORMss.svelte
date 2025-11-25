<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let email = '';
  let message = '';
  let submitting = false;

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Please provide your name and email.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    submitting = true;
    try {
      // Dispatch submit event for parent components or page to handle
      dispatch('submit', { name: name.trim(), email: email.trim(), message: message.trim() });

      // Simulate a network request (replace with real fetch if needed)
      await new Promise((r) => setTimeout(r, 600));

      // Reset form
      name = '';
      email = '';
      message = '';
      alert('Thank you — your message has been sent.');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    } finally {
      submitting = false;
    }
  }
</script>

<section class="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg max-w-lg mx-auto">
  <h3 class="text-2xl font-semibold text-gray-900 text-center dark:text-white">Contact Us</h3>
  <p class="mt-2 text-center text-gray-600 dark:text-gray-300 text-lg">Have questions or want to join?</p>
  <p class="mt-2 text-center text-gray-600 dark:text-gray-300 text-base">Send us a message and we'll get back to you.</p>

  <form class="mt-4 space-y-4" on:submit|preventDefault={handleSubmit}>
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
      <input
        type="text"
        bind:value={name}
        required
        placeholder="Your full name"
        class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
        aria-label="Name"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
      <input
        type="email"
        bind:value={email}
        required
        placeholder="you@example.com"
        class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
        aria-label="Email"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
      <textarea
        bind:value={message}
        rows="4"
        placeholder="Tell us a bit about your interest"
        class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
        aria-label="Message"
      ></textarea>
    </div>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/70 hover:bg-teal-600 text-white text-sm font-medium rounded-md shadow-sm disabled:opacity-50"
        disabled={submitting}
        aria-disabled={submitting}
      >
        {#if submitting}
          Sending...
        {:else}
          Send Message
        {/if}
      </button>

      <button
        type="button"
        class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300"
        on:click={() => { name=''; email=''; message=''; }}
      >
        Clear
      </button>
    </div>
  </form>
</section>
