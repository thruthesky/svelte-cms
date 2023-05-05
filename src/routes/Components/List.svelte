<script lang="ts">
	let text = '';
	let lists: Array<{ note: string; edit: boolean; del: boolean }> = [];

	function submit() {
		lists = [...lists, { note: text, edit: false, del: false }];
		text = '';
	}
	function clear(i: number) {
		lists.splice(i, 1);
		lists = lists;
	}
	function edit(i: number, isEdit: boolean) {
		lists[i].edit = isEdit;
	}
</script>

<h1>Note</h1>
<form on:submit={submit}>
	<textarea placeholder="Enter Here" bind:value={text} />
	<button type="submit" on:click>submit</button>
</form>

{#each lists as list, i}
	<div>
		{#if list.edit}
			<input bind:value={list.note} />
			<button on:click={() => edit(i, false)}>Save</button>
		{:else}
			<p>{list.note}</p>
			<button on:click={() => edit(i, true)}>Edit</button>
		{/if}
		<button on:click={() => clear(i)}>delete</button>
	</div>
{/each}
