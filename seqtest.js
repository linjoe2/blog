var Sequelize = require('sequelize');
var sequelize = new Sequelize('stoner', 'linjoe', null, {
	host: 'localhost',
	dialect: 'postgres'
});



var user = sequelize.define('user', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	email: Sequelize.STRING
});


// sequelize.sync().then(function () {
// 	user.create({
// 		username: 'birds are chirpy',
// 		password: 'chirp chirp',
// 		email: 'test'
// 	});

// });

user.findAll().then(function (users) {
	var data = users.map(function (post) {
		return {
			id: post.dataValues.id,
			username: post.dataValues.username,
			password: post.dataValues.password,
			email: post.dataValues.email
		};
	});

	console.log("printing results:");
	console.log(data);
});