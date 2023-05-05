<script>
	import { loginUser } from '../lib/stores/app.store';
	import List from './Components/List.svelte'
	import View from './Components/View.svelte'
	let act1 = true
	let act2 = true
</script>

{#if act1}
	<h1>Welcome to CMS</h1>
	<button on:click={() => act1 = false}>Make Note</button>

{#if $loginUser}
	<p>Hi, {$loginUser.name}!</p>
	<p>My Id is {$loginUser.id}</p>

{:else}
	{#if act2}
		<List on:click={() => act2 = false}/>
	{:else}
		<View />
	{/if}
{/if}
