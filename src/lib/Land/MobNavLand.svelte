<script lang="ts">
import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>

<TabGroup 
	justify="justify-center"
	active="variant-filled-warning"
	hover="hover:variant-soft-warning"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>

    	<TabAnchor href="/landing/about" selected={$page.url.hash === '#about'}>
		<svelte:fragment slot="lead">&#x95EE;</svelte:fragment>
		<span>About</span>
	</TabAnchor>	
    <TabAnchor href="/landing/course" selected={$page.url.hash === '#courses'}>
		<svelte:fragment slot="lead">&#x1F56E;</svelte:fragment>
		<span>Courses</span>
	</TabAnchor>
	<TabAnchor href="/landing/contact" selected={$page.url.hash === '#courses'}>
		<svelte:fragment slot="lead">&#x1F56E;</svelte:fragment>
		<span>Contact</span>
	</TabAnchor>
    
	<!-- ... -->
</TabGroup>