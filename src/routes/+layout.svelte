<script>
	import { loginUser } from '../lib/stores/app.store';
	export let data;
	loginUser.set(data.loginUser);
</script>

<header>
	<a href="/">Home</a> | <a href="/register">Register</a> | <a href="/login">Login</a> |
	<a href="/menu">Menu</a>
</header>
<slot />
