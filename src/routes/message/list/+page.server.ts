import mariadb from 'mariadb';

export async function load({ cookies }) {
	const idx = cookies.get('idx');

	const conn = await mariadb.createConnection({
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_NAME
	});

	const rows = await conn.query('SELECT * FROM messages WHERE idx_receiver=?', [idx]);

	for (let i = 0; i < rows.length; i++) {
		const $userRows = await conn.query('SELECT * FROM users WHERE idx=?', [rows[i].idx_sender]);
		rows[i].sender = $userRows[0].id;
	}

	let allMessageData = [];

	allMessageData = rows;

	console.log(rows);

	return {
		userMessages: { allMessageData }
	};
}
