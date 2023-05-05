<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	export let form;
</script>

<h1>DELETE Category</h1>
{#if form}
	{#if form.success}
		<p>Successful in deleting! Check if it is still on the list</p>
	{:else}
		<p>Error: {form.error_message}</p>
	{/if}
{/if}
<form method="post">
	<div class="form_container">
		<div>
			<label>
				Choose a Category:
				<select name="category_id">
					{#each data.fetchedCategories as category}
						<option value={category.id}>{category.id}:{category.category}</option>
					{/each}
				</select>
			</label>
		</div>
		<button type="submit">Delete</button>
	</div>
</form>

<style>
	.form_container label {
		display: block;
		flex: content;
	}
	.form_container label input {
		display: block;
		flex: content;
		width: 80%;
		padding: 10px;
		margin-bottom: 10px;
	}
	.form_container label select {
		display: block;
		flex: content;
		width: 80%;
		padding: 10px;
		margin-bottom: 10px;
	}
	.form_container label textarea {
		display: block;
		flex: content;
		width: 80%;
		padding: 10px;
		margin-bottom: 10px;
	}
</style>
