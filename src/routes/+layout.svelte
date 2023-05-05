<script>
	import { loginUser } from '../lib/stores/app.store';
	export let data;
	loginUser.set(data.loginUser);
</script>

<header>
	<a href="/">Home</a> | <a href="/register">Register</a> | <a href="/login">Login</a> |
	<a href="/logout">Logout</a>
	|
	<a href="/menu">Menu</a> | User: List, View, Edit, Delete (kian) | Category: CRUD (<a href="/category/create">Create</a>,
	<a href="/category/read">Read(LIST)</a>, <a  href="/category/update">Update</a>, <a href="/category/delete">Delete</a> ) (chris) | Message: CRUD. (vin). <a href="/message/create">Create</a>,
	<a href="/message/list">List</a>, View, Update, Delete.

</header>
<hr>
<slot />
