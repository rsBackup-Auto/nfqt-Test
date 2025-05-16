<script>
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
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div class="relative w-full h-full flex items-center justify-center">
        <!-- Modal content -->
        <div class="bg-white w-full h-full max-w-none max-h-none overflow-auto rounded-none shadow-lg p-0">
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
                            <h2 class="mb-12 px-6 text-3xl font-bold">
                                Contact us
                            </h2>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <div class="mb-3 w-full">
                                <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                    Name
                                </label>
                                <input type="text" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
                            </div>
                            <div class="mb-3 w-full">
                                <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput91">
                                    Email
                                </label>
                                <input type="email" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput91"
                                    placeholder="Enter your email address" />
                            </div>
                            <div class="mb-3 w-full">
                                <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput92">
                                    Message
                                </label>
                                <textarea class="px-2 py-2 border rounded-[5px] w-full outline-none" id="exampleInput92"></textarea>
                            </div>
                            <button type="button"
                                class="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
                                Send
                            </button>
                        </form>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div class="flex flex-wrap">
                                <!-- ...Contact info blocks, copy from your original... -->
                                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-6 grow">
                                            <p class="mb-2 font-bold">
                                                Technical support
                                            </p>
                                            <p class="text-neutral-500 ">
                                                support@example.com
                                            </p>
                                            <p class="text-neutral-500 ">
                                                +1 234-567-89
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Repeat the other info blocks as in your original file -->
                                <!-- ... -->
                            </div>
                        </div>
                    </div>
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