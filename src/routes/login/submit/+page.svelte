<script lang="ts">
	import { loginUser, type LoginUser } from '$lib/stores/app.store';

	export let data;

	console.log(data);
	loginUser.set(data as LoginUser);
</script>

<h1>Contratulations!</h1>

{#if data.code}
	<h2>Error: {data.code}</h2>
{:else}
	<h2>Success!</h2>

	You have just login!
	<a href="/">Go Home</a>
{/if}
