import mariadb from 'mariadb';


interface CategoryUpdateRequest {
	category_id: string | undefined;
	category_name: string | undefined;
	category_description: string | undefined;
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
			const categoryData: CategoryUpdateRequest = {
				category_id: dataReceived.get('category_id')?.toString(),
				category_name: dataReceived.get('category_name')?.toString(),
				category_description: dataReceived.get('category_description')?.toString()
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
				'UPDATE categories SET category=?, description=?, createdBy=? WHERE id=?',
				[categoryData.category_name, categoryData.category_description, idx, categoryData.category_id]
			);
			conn.end();
			// console.log('RESULT is SUCCESFUL? ' + resultCreate);
			// console.log(resultCreate);
			if (resultCreate.affectedRows > 0) {
				return { success: true };
			} else {
				return { success: false, error_message: 'Please login first' };
			}
		}
	}
};
