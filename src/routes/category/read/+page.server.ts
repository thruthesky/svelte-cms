import mariadb from 'mariadb';

export async function load({ url }) {
	let messageResult = 'Internal Error'; // Default, will update when successful in register
	const conn = await mariadb.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_DBNAME
	});
	// TODO pagination
	// if (url.searchParams.get('pageBegin')) {
	//    const username = url.searchParams.get('pageBegin');
	//      add pagination logic here.
	// }
	const fetchAllCategories = await conn.query(
		// TODO pagination for pageBegin
		'SELECT * FROM categories ORDER BY createdAt DESC'
	);
	if (fetchAllCategories.length > 0) {
		messageResult = 'Found ' + fetchAllCategories.length + ' categories in the forum.';
	} else {
		messageResult = 'No Forum Topics found.';
	}
	console.log(fetchAllCategories);
	conn.end();
	return { message: messageResult, fetchedCategories: fetchAllCategories };
}
