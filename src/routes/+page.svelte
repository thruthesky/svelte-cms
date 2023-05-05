<script>
	import { loginUser } from '../lib/stores/app.store';
</script>

<h1>Welcome to CMS</h1>

{#if $loginUser}
	<p>Hi, {$loginUser.name}!</p>
	<p>My Id is {$loginUser.id}</p>
{:else}
	<p>Please <a href="/login">login</a></p>
	<p>Or <a href="/register">register</a> to continue.</p>
{/if}
