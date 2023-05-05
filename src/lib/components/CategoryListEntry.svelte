<script lang="ts">
	export let category_name: string = 'Unidentified Category';
	export let category_description: string | null = null;
	export let created_by: string | null = null;
	export let created_at: string | null = null;
	export let created_at_date: Date | null = null;
	export let creator_id: number | null = null;

	if (created_at) {
		created_at_date = new Date(created_at);
	}
</script>

<div class="category_entry_container">
	<div class="category_name_container">
		<h2>{category_name}</h2>
	</div>
	{#if category_description}
		<hr />
	{/if}

	{#if created_by || created_at}
		<div>
			{#if created_by}
				added by {created_by}
			{/if}
			{#if created_at}
				on {created_at_date?.toLocaleString("en-US", {timeZoneName: "short"})}
			{/if}
		</div>
	{/if}
	{#if category_description}
		<div>
			{category_description}
		</div>
	{/if}
</div>

<style>
	.category_entry_container {
		border: 1px solid black;
		margin: 5px;
		padding: 10px;
	}
</style>
