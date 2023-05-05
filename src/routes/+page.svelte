<script>
	import { loginUser } from '../lib/stores/app.store';
	import List from './Components/List.svelte';
	import View from './Components/View.svelte';
	let act1 = true;
	let act2 = true;
</script>

{#if act1}
	<h1>Welcome to CMS</h1>
	<button on:click={() => (act1 = false)}>Make Note</button>

	{#if $loginUser}
		<p>Hi, {$loginUser.name}!</p>
	{:else}
		<p>Please <a href="/login">login</a></p>
		<p>Or <a href="/register">register</a> to continue.</p>
	{/if}
{:else if act2}
	<List
		on:click={() => {
			console.log('This code work?');
			act2 = false;
			act1 = true;
		}}
	/>
{:else}
	<View />
{/if}
