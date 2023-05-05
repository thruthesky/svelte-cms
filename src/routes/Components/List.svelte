<script>

	let text = ''
    let lists = []


	function submit() {
        lists = [...lists, {note: text, edit: true, del: false}]
        text = ''
	}
    function clear(i) {
        lists.splice(i, 1)
        lists = lists
    }
    function edit(i, isEdit) {
        lists[i].edit = isEdit
    }
    

</script>
<h1>Note</h1>
<form on:submit={submit}>
	<textarea placeholder="Enter Here" bind:value={text}/>
	<button type=submit>submit</button>
</form>

{#each lists as list, i}
<div>
    {#if list.edit}
        <p>{list.note}</p>
        <button on:click={() => edit(i, false)}>Edit</button>
    {:else}
        <input bind:value={list.note}>
        <button on:click={() => edit(i, true)}>Save</button>
    {/if}
    <button on:click={() => clear(i)}>delete</button>
</div>
{/each}




