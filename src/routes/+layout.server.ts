import { DB_PW } from '$env/static/private';
import mariadb from 'mariadb';

export async function load({ cookies }) {
	const idx = cookies.get('idx');
	if (!idx) {
		return {
			loginUser: null
		};
	}

	const conn = await mariadb.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_DBNAME
	});

	const rows = await conn.query('SELECT  * FROM users WHERE idx=?', [idx]);

	return {
		loginUser: rows[0]
	};
}
