import { DB_PW } from '$env/static/private';
import mariadb from 'mariadb';

export async function load({ url, cookies }) {
	const note = url.searchParams.get('note');

	const conn = await mariadb.createConnection({
		user: 'root',
		password: DB_PW,
		database: 'test5'
	});

	const rows = await conn.query('SELECT * FROM users WHERE note=?', [note]);
	if (rows.length === 0) {
		return { code: 'invalid' };
	}

	const user = rows[0];

	cookies.set('idx', user.note, { path: '/' });

	return user;
}


