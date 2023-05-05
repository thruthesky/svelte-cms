<script>
	export let data;
	console.log('message', data);
</script>

<h1>Message View</h1>

<div>
	title: {data.message.title}
</div>

<div>
	content: {data.message.content}
</div>
