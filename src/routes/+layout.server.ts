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
		user: 'cms',
		password: DB_PW,
		database: 'cms'
	});

	const rows = await conn.query('SELECT  * FROM users WHERE idx=?', [idx]);

	return {
		loginUser: rows[0]
	};
}
