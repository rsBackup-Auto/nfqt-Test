<script>
    import { fade, scale } from 'svelte/transition';
    import Contactin from "./contactin.svelte";

    export let open = false;
    export let onClose = () => {};

    // Prevent scrolling when modal is open
    $: {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
</script>

{#if open}
<div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    transition:fade={{ duration: 300 }}
>
    <div
        class="relative w-full h-full flex items-center justify-center"
        transition:scale={{ duration: 300 }}
    >
        <!-- Modal content -->
        <div class="bg-black/90 w-full h-full max-w-none max-h-none overflow-auto rounded-none shadow-lg p-0">
            <!-- Close button -->
            <button
                class="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                aria-label="Close"
                on:click={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <!-- Contact form content -->
            <div class="container my-12 mx-auto px-2 md:px-4">
                <section class="mb-32">
                    <div class="flex justify-center">
                        <div class="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 class="mb-3 hidden px-6 text-3xl font-bold">
                                Contact us
                            </h2>
                        </div>
                    </div>
                    <Contactin />
                   
                </section>
            </div>
        </div>
    </div>
</div>
{/if}

<style>
/* Optional: Hide scrollbars for modal background */
body.modal-open {
    overflow: hidden;
}
</style>