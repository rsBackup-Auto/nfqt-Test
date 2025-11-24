<script>
  export let title;
  export let subtitle;
  export let price;
  export let features = [];
  export let buttonIcon;
  export let buttonText;
  export let svgBg;
</script>

<div class="pricing-wrapper w-full relative rounded-2xl bg-gradient-to-t from-gray-300/40 to-white p-0.5 shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out md:hover:shadow-2xl md:hover:scale-105 border-t border-black dark:border-gray-200">
  <div class="relative bg-white/5  rounded-2xl p-8 text-center max-w-full w-full z-0 overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ease-in-out h-full flex flex-col justify-between will-change-transform">
      <div class="absolute inset-0 pointer-events-none z-0">
        {@html svgBg}
      </div>
    <div class="relative z-10 flex flex-col h-full">
      <h3 class="plan-title text-lg md:text-xl text-gray-800">{title}</h3>
      <span class="plan-title text-xs relative top-[-7px] m-0 text-blue-600">{subtitle}</span>
      <p class="plan-price text-3xl my-2 font-extrabold text-gray-700/90">{price}</p>
      <ul class="text-gray-800 mt-4 space-y-2 flex-1">
        {#each features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
      <a href="/booknow" class="checkout-button flex items-center justify-center bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold border-none py-3 px-6 text-lg rounded-lg w-full shadow-md hover:from-orange-600 hover:to-orange-400 hover:scale-105 transition-all duration-300 mt-6">
        <span class="iconify mr-1 text-lg mb-0.5"  data-inline="false"></span>
        <span>{buttonText}</span>
      </a>
    </div>
    <div class="relative">
      <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 select-none text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">{buttonIcon}</span>
    </div>
  </div>
</div>