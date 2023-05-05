<script>
	import { loginUser } from '../lib/stores/app.store';
	export let data;
	loginUser.set(data.loginUser);
</script>

<header>
	<a href="/">Home</a> | <a href="/register">Register</a> | <a href="/login">Login</a> |
	<a href="/logout">Logout</a>
	|
	<a href="/menu">Menu</a> | User: List, View, Edit, Delete (kian) | Category: CRUD (Create,
	Read(LIST), Update, Delete ) (chris) | Message: CRUD. (vin). <a href="/message/create">Create</a>,
	List, View, Update, Delete.
</header>
<slot />
