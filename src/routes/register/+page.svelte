<h1>Register</h1>

<form action="/register/submit">
	<label for="registrationId">User ID</label>
	<input id="registrationId" name="id" placeholder="Input login id" type="text" />
	<label for="registrationId">User Password</label>
	<input id="registrationPassword" name="password" placeholder="Input login password" type="text" />
	<label for="registrationName">Name</label>
	<input id="registrationName" name="name" placeholder="Input name" type="text" />
	<label for="registrationEmail">Email</label>
	<input id="registrationEmail" name="email" placeholder="Input email" type="text" />
	<label for="registrationGender">Gender</label>
	<input id="registrationGender" name="gender" placeholder="Input gender" type="text" />

	<button type="submit">Register</button>
</form>

<style>
	label {
		display: block;
		margin-bottom: 0.25rem;
	}
	input {
		display: block;
		margin-bottom: 1.5rem;
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
	}
</style>
