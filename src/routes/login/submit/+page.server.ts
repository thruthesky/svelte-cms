import { DB_PW } from '$env/static/private';
import mariadb from 'mariadb';

export async function load({ url, cookies }) {
	const id = url.searchParams.get('id');
	const password = url.searchParams.get('password');

	const conn = await mariadb.createConnection({
		user: 'cms',
		password: DB_PW,
		database: 'cms'
	});

	const rows = await conn.query('SELECT idx, password FROM users WHERE id=?', [id]);
	if (rows.length === 0) {
		return { code: 'auth/id-not-found' };
	}

	const row = rows[0];
	if (row.password !== password) {
		return { code: 'auth/password-not-match' };
	}

	cookies.set('idx', row.idx, { path: '/' });

	return { message: 'Hello from the server!' };
}
