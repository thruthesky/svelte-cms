import mariadb from 'mariadb';


interface CategoryDeleteRequest {
	category_id: string | undefined;
}

export async function load({ url }) {
	let messageResult = 'Internal Error'; // Default, will update when successful in register
	const conn = await mariadb.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_DBNAME
	});
	const fetchAllCategories = await conn.query(
		'SELECT * FROM categories ORDER BY createdAt DESC'
	);
	if (fetchAllCategories.length > 0) {
		messageResult = 'Found ' + fetchAllCategories.length + ' categories in the forum.';
	} else {
		messageResult = 'No Forum Topics found.';
	}
	//console.log(fetchAllCategories);
	conn.end();
	return { message: messageResult, fetchedCategories: fetchAllCategories };
}



export const actions = {
	default: async (event) => {
		if (event.cookies.get('idx') === void 0) {
			console.log('DEBUG: Cookies were deleted');
			return { success: false, error_message: 'Please login first' };
		} else {
			const dataReceived = await event.request.formData();
			const categoryData: CategoryDeleteRequest = {
				category_id: dataReceived.get('category_id')?.toString()
			};
			console.log('DATA RECEIVED: ' + categoryData);
			const idx = event.cookies.get('idx');
			const conn = await mariadb.createConnection({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PW,
				database: process.env.DB_DBNAME
			});
			const resultCreate = await conn.query(
				'DELETE FROM categories WHERE id=?',
				[categoryData.category_id]
			);
			conn.end();
			// console.log('RESULT is SUCCESFUL? ' + resultCreate);
			// console.log(resultCreate);
			if (resultCreate.affectedRows > 0) {
				return { success: true };
			} else {
				return { success: false, error_message: 'Internal Database Error' };
			}
		}
	}
};
