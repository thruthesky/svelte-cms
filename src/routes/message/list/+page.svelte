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
    <table>
        <tr>
            <th>idx_sender</th>
            <th>Title</th>
            <th>createdAt</th>
        </tr>
    {#each messages as message}
        <tr>
            <td>{ message.idx_sender }</td>
            <td>{ message.title }</td>
            <td>{ message.createdAt }</td>
        </tr>
    {/each} 
    </table>
</div>

<style>
    #container{
        border:1px solid black;
        width: 30%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 10px;
    }
    table, th, td {
  		border: 1px solid black;
	}
</style>

