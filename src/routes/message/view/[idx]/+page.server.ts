import { DB_NAME, DB_PW, DB_USER } from '$env/static/private';
import mariadb from 'mariadb';

export async function load({ params, cookies }) {
	const idx = params.idx;

	const conn = await mariadb.createConnection({
		user: DB_USER,
		password: DB_PW,
		database: DB_NAME
	});

	const rows = await conn.query('SELECT * FROM messages WHERE idx=?', [idx]);

	return {
		message: rows[0]
	};
}
