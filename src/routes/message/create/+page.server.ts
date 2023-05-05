// import mariadb from 'mariadb';
// import { DB_PW } from '$env/static/private';

// interface MessageCreateRequest {
// 	idx_sender: number;
// 	idx_receiver: number;
// 	title: string;
// 	content: string;
// }

// export const actions = {
// 	default: async (event) => {
// 		const data = (await event.request.formData()) as any as MessageCreateRequest;
// 		const idx = event.cookies.get('idx');
// 		console.log('server', data);

// 		const conn = await mariadb.createConnection({
// 			user: 'cms',
// 			password: DB_PW,
// 			database: 'cms'
// 		});

// 		await conn.query(
// 			'INSERT INTO messages (idx_sender, idx_receiver, title, content, createdAt) VALUES (?, ?, ?, ?, UNIX_TIMESTAMP())',
// 			[data.idx_sender, idx, data.title, data.content]
// 		);
// 		return { success: true };
// 	}
// };


