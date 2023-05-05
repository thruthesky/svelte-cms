
import mariadb from 'mariadb';

export const actions = {
	default: async (event:any) => {
		const data = (await event.request.formData());
		const idx = event.cookies.get('idx');

		// console.log(idx)
		// console.log('server', data);
		const conn = await mariadb.createConnection({

			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PW,
			database: process.env.DB_DBNAME

		});

		await conn.query(
			'INSERT INTO messages (idx_sender,idx_receiver,title, content, createdAt) VALUES (?,?,?,?,UNIX_TIMESTAMP())',
			[idx,data.get('idx_receiver'),data.get('title'),data.get('content')]);
		// console.log(FormData);

		console.log(data.get('title'));
		console.log(data.get('content'));
		console.log(data.get('idx_receiver'));

		// console.log(idx)
		// console.log(res);
		return { success: true };
	}
};
