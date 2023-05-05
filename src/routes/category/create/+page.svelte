<script lang="ts">
	export let form;
</script>

<h1>Create Category</h1>

{#if form}
	{#if form.success}
		<p>Successful adding category! Check it on List.</p>
	{:else}
		<p><strong>ERROR: </strong>{form.error_message}</p>
	{/if}
{/if}

<form method="post">
	<div class="form_container">
		<label>
			Category Name
			<input type="text" name="category_name" />
		</label>
		<label>
			Description
			<textarea name="category_description" />
		</label>
		<button type="submit">Submit</button>
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
