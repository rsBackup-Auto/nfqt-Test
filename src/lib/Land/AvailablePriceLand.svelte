<script>
  import PricingCard from './PricingCard.svelte';

  const warriorSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-green-200 opacity-10 transition duration-1000 delay-500 md:group-hover:-translate-y-8 md:group-hover:-translate-x-8" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M8 56l48-48M56 8l-8 8M16 56l8-8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`;
  const plantSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-blue-200 opacity-10 transition duration-1000 delay-200 md:group-hover:-translate-y-8 md:group-hover:-translate-x-8" width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M32 56V32M32 32C32 20 44 20 44 32M32 32C32 20 20 20 20 32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="32" r="4" fill="currentColor"/></svg>`;
  const bambooSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="absolute top-8 left-8 text-[500px] z-[-1] pointer-events-none text-lime-200 opacity-10 transition duration-1000 delay-1000 md:group-hover:-translate-y-8 md:group-hover:-translate-x-8" width="1em" height="1em" viewBox="0 0 64 64"><rect x="28" y="8" width="8" height="48" rx="4" fill="currentColor"/><rect x="40" y="16" width="6" height="32" rx="3" fill="currentColor"/><rect x="18" y="24" width="6" height="24" rx="3" fill="currentColor"/></svg>`;
</script>

<div class="space-y-6 lg:px-8 mt-0 text-center group">
  <div class="mx-auto grid justify-center gap-12 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3 lg:pb-10">
    <PricingCard

      title="Warrior in the Garden"
      subtitle="3 modules of (22 hours)"
      features={[
        "Unleash serene strength with mushin mindset, strategic strikes, and holistic mastery."
      ]}
      buttonIcon="Popular"
      buttonText="Book Now"
      svgBg={warriorSVG}
    />
    <PricingCard
      title="Plant Yourself"
      subtitle="3 modules of (26 hours)"
      features={[
        "Root unshakable resilience with mushin focus, enduring drills, and holistic growth.",
        "Community support - Unlimited Access"
      ]}
      buttonIcon="Intermediate"
      buttonText="Book Now!"
      svgBg={plantSVG}
    />
    <PricingCard
      title="Grow Like a Bamboo"
      subtitle="2 modules Advanced Techniques, (28 hours)"
      features={[
        "Forge invisible strength with mushin strikes, strategic endurance, and holistic mastery.",
        "Exclusive workshops",
        "Community support - Unlimited Access"
      ]}
      buttonIcon="Advanced"
      buttonText="Book Now!"
      svgBg={bambooSVG}
    />
  </div>
</div>

<div class="flex justify-center hidden">
  <div class="items-center mt-10 px-6 py-1 text-xs bg-gray-300 rounded-full inline-flex transition duration-300 hover:bg-gray-800 hover:text-white hover:-translate-y-1">
    <a target="_blank" href="">Live Chat</a>
  </div>
</div>