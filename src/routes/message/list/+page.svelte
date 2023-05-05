<script>
	export let data;
	//export data to access data from allMessages
	const allMessages = data.userMessages;

	console.log(allMessages);

	const messages = allMessages.allMessageData;
	console.log(messages);
</script>

<h1>My message list</h1>
<div id="container">
	<!-- <div><a href="/message/view">sender name, title, date</a></div> Need to add Link to View message -->

	<div class="grid header">
		<div>Name</div>
		<div>Title</div>
		<div>createdAt</div>
	</div>
	{#each messages as message}
		<div class="grid">
			<div>{message.sender}</div>
			<div><a href="/message/view/{message.idx}">{message.title}</a></div>
			<div>{new Date(message.createdAt * 1000).toString().split('GMT')[0]}</div>
		</div>
	{/each}
</div>

<style>
	#container {
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 10px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
	}
</style>
