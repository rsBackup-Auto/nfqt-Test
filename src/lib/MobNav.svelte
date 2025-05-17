<script lang="ts">
import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
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
        <TabAnchor on:click={() => dispatch('openContact')}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Contact us</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>