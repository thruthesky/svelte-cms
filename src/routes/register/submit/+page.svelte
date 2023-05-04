<script lang="ts">
	export let data;

	console.log(data);
</script>

<h1>Contratulations!</h1>

{#if data.code}
	<h2>Error: {data.code}</h2>
{:else}
	<h2>Success!</h2>

	You have just registered!
{/if}
