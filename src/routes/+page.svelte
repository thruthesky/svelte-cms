<script>
	import { loginUser } from '../lib/stores/app.store';
</script>

<h1>Welcome to CMS</h1>

{#if $loginUser}
	<p>Hi, {$loginUser.name}.</p>
	<p>My Id is {$loginUser.id}</p>
	<p>My Idx is {$loginUser.idx}</p>
{/if}
