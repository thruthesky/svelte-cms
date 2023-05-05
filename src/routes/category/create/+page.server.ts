import mariadb from 'mariadb';

interface CategoryCreateRequest {
	category_name: string | undefined;
	category_description: string | undefined;
}

export const actions = {
	default: async (event) => {
		if (event.cookies.get('idx') === void 0) {
			console.log('DEBUG: Cookies were deleted');
			return { success: false, error_message: 'Please login first' };
		} else {
			const dataReceived = await event.request.formData();
			const categoryData: CategoryCreateRequest = {
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
				'INSERT INTO categories (category, description, createdBy) VALUES(? ,? ,?)',
				[categoryData.category_name, categoryData.category_description, idx]
			);
			conn.end();
			console.log('RESULT is SUCCESFUL? ' + resultCreate);
			console.log(resultCreate);
			if (resultCreate.affectedRows > 0) {
				return { success: true };
			} else {
				return { success: false, error_message: 'Please login first' };
			}
		}
	}
};
