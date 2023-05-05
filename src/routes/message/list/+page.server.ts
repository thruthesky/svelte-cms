import mariadb from 'mariadb';

export async function load({ cookies }) {
    const id = cookies.get('id');
	
	const conn = await mariadb.createConnection({
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_NAME,
	});

	const rows = await conn.query('SELECT  * FROM messages WHERE idx_receiver=?', [id]);
    let allMessageData = [];

    allMessageData = rows;

    

    console.log(rows);

	return {
		userMessages: { allMessageData}
	};
}


