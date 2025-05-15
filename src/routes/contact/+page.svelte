<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit() {
    submitted = true;
    // Integrate with backend or email service here
  }
</script>

<main class="bg-gradient-to-br from-green-600 via-green-500 to-orange-100 p-8 rounded-3xl max-w-3xl mx-auto mt-12 shadow-2xl border border-orange-200">
  <div class="py-6">
    <p class="text-orange-500 text-xl text-center tracking-widest uppercase font-serif">Contact</p>
    <h2 class="text-5xl font-bold text-center mb-2 text-gray-900 font-serif drop-shadow">Connect With Us</h2>
    <p class="text-center text-gray-700 mb-8">We’re here to help you on your journey. Reach out to us for any inquiries, bookings, or collaborations.</p>
  </div>

  <div class="flex flex-col md:flex-row gap-10 mb-10">
    <div class="flex-1 bg-white/60 rounded-2xl p-6 shadow-lg border border-orange-100">
      <h3 class="text-2xl font-semibold text-orange-600 mb-4 font-serif">Contact Details</h3>
      <ul class="space-y-3 text-lg">
        <li>
          <span class="font-bold text-gray-800">Phone:</span>
          <a href="tel:+1234567890" class="text-orange-500 hover:underline ml-2">+1 (234) 567-890</a>
        </li>
        <li>
          <span class="font-bold text-gray-800">Email:</span>
          <a href="mailto:info@luxmartial.com" class="text-orange-500 hover:underline ml-2">info@luxmartial.com</a>
        </li>
        <li>
          <span class="font-bold text-gray-800">Address:</span>
          <span class="ml-2">123 Luxury Ave, Suite 100, City, Country</span>
        </li>
        <li class="flex gap-4 mt-4">
          <a href="https://facebook.com/" target="_blank" aria-label="Facebook" class="hover:text-orange-600 text-gray-700 text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://instagram.com/" target="_blank" aria-label="Instagram" class="hover:text-orange-600 text-gray-700 text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.388 3.678 1.37c-.98.98-1.239 2.092-1.298 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.282.318 2.394 1.298 3.374.981.981 2.093 1.239 3.374 1.298C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.317 3.374-1.298.98-.98 1.239-2.092 1.298-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.282-.318-2.394-1.298-3.374-.981-.981-2.093-1.239-3.374-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" aria-label="Twitter" class="hover:text-orange-600 text-gray-700 text-2xl">
            <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex-1 bg-white/80 rounded-2xl p-6 shadow-lg border border-orange-100">
      <h3 class="text-2xl font-semibold text-orange-600 mb-4 font-serif">Send Us a Message</h3>
      {#if !submitted}
        <form class="space-y-5" on:submit|preventDefault={handleSubmit}>
          <div>
            <label class="block text-orange-500 font-semibold mb-1" for="name">Name</label>
            <input
              id="name"
              class="w-full p-3 rounded-lg border border-orange-400 bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              type="text"
              bind:value={name}
              required
            />
          </div>
          <div>
            <label class="block text-orange-500 font-semibold mb-1" for="email">Email</label>
            <input
              id="email"
              class="w-full p-3 rounded-lg border border-orange-400 bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              type="email"
              bind:value={email}
              required
            />
          </div>
          <div>
            <label class="block text-orange-500 font-semibold mb-1" for="message">Message</label>
            <textarea
              id="message"
              class="w-full p-3 rounded-lg border border-orange-400 bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              rows="5"
              bind:value={message}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-orange-600 hover:to-orange-500 transition text-lg shadow"
          >
            Send Message
          </button>
        </form>
      {:else}
        <div class="text-center text-green-900 font-semibold text-xl py-10">
          Thank you for contacting us! We will get back to you soon.
        </div>
      {/if}
    </div>
  </div>
</main>