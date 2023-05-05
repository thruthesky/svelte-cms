<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
    export let form;

	// let selectedID: number;
	// let getCategoryName: string;
	// let getCategoryDesc: string;


    // TODO display details first

    // function scanCategoryIndex(idToFind: number) {
    //     let rowPointer = 0;
    //     let caughtRecord = 0;
    //     for (rowPointer = 0; rowPointer < data.fetchedCategories.length; rowPointer++) {
    //         if (data.fetchedCategories[rowPointer].id == idToFind) {
    //             caughtRecord = rowPointer;

    //             alert("SELECTEDID" + caughtRecord.toString());
    //         }
    //     }
    //     return caughtRecord;
    // }
	// function updateCategoryForm() {
    //     scanCategoryIndex(selectedID);
	// }

	// onMount(async () => {
	// 	if (data.fetchedCategories.length > 0) {
	// 		selectedID = data.fetchedCategories[0].id;
	// 		getCategoryName = data.fetchedCategories[0].category;
	// 		getCategoryDesc = data.fetchedCategories[0].description;
	// 	}
	// });
</script>

<h1>Update Category</h1>
{#if form}
    {#if form.success}
        <p>Successful in updating! Check it on the list</p>
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
		<div>
			<label>
				Category Name
				<input type="text" name="category_name" />
			</label>
		</div>
		<div>
			<label>
				Description
				<textarea name="category_description" />
			</label>
		</div>
		<button type="submit">Update</button>
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
