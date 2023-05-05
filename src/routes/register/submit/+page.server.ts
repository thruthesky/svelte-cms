import mariadb from 'mariadb';

export async function load({ request, url }) {
	const id = url.searchParams.get('id');
	const password = url.searchParams.get('password');
	const name = url.searchParams.get('name');
	const email = url.searchParams.get('email');
	const gender = url.searchParams.get('gender');

	const conn = await mariadb.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_DBNAME
	});

	const idRes = await conn.query('SELECT idx FROM users WHERE id=?', [id]);
	if (idRes.length > 0) {
		return { code: 'auth/id-already-exists' };
	}
	const emailRes = await conn.query('SELECT idx FROM users WHERE email=?', [email]);
	if (emailRes.length > 0) {
		return { code: 'auth/email-already-exists' };
	}

	const res = await conn.query(
		'INSERT INTO users (id, password, name, email, gender, createdAt) VALUES (?, ?, ?, ?, ?, UNIX_TIMESTAMP())',
		[id, password, name, email, gender]
	);

	return { message: 'Hello from the server!' };
}