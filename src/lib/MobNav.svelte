<script lang="ts">
import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
let showContactModal = false;
</script>

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="#home" selected={$page.url.hash === '#home'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Home</span>
	</TabAnchor>
    	<TabAnchor href="#about" selected={$page.url.hash === '#about'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>About Us</span>
	</TabAnchor>	<TabAnchor href="#services" selected={$page.url.hash === '#services'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Services</span>
	</TabAnchor>	
    <TabAnchor href="#courses" selected={$page.url.hash === '#courses'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Courses</span>
	</TabAnchor>
        <TabAnchor on:click={() => showContactModal = true}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Contact us</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>

{#if showContactModal}
    <!-- Your modal component here -->
    <div class="modal">Contact Form</div>
{/if}