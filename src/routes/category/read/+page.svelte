<script>
	import CategoryListEntry from '$lib/components/CategoryListEntry.svelte';

	export let data;
    console.log(data);
</script>

<h1>READ (List of Categories)</h1>

{#if data.fetchedCategories}
	<p><em>{data.message}</em></p>
{/if}
{#each data.fetchedCategories as category}
	<CategoryListEntry category_name={category.category} category_description={category.description} creator_id={category.id} created_at={category.createdAt}/>
{/each}
