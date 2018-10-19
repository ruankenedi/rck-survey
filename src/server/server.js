const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const conn = require('./db.js');
const userModel = require('./userModel.js');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
In order to register subroutes,
you should use the express.Router
instead of directly registering a
nested path like "app.post('nested/path', cb)".
Find out more about express.Router in
http://expressjs.com/en/4x/api.html#express.router
*/

const authRoute = express.Router();

authRoute.post('/login', (req, res) => {
  const { email } = req.body;
	const { password } = req.body;

	conn.database.collection('users')
		.find({ email, password })
		.toArray((err, result) => {
			if (result.length === 0) {
				res.json({ data: 'Usuário não encontrado!', status: 401, ok: false });
				return err;
			} else {
				res.json({ data: result, status: 200, ok: true });
			}
		});
});

app.use('/auth', authRoute);

/* The registered route below has not a valid path */

app.post('auth/login', (req, res) => {
	const { email } = req.body;
	const { password } = req.body;

	conn.database.collection('users').find({ email: email[0], password: password[0] })
		.toArray((err, result) => {
			console.log('RESULT: ', result);

			if (result.length === 0) {
				res.json({ data: 'Usuário não encontrado!', status: 401, ok: false });
				return err;
			} else {
				res.json({ data: result, status: 200, ok: true });
			}
		});
	console.log('REQUEST: ', req.body);
	// const user = req.body.login;
	// const password = req.body.password;
	// console.log('GOL: ', user);



	// conn.database.collection('users').find({ login: user, password: password }).toArray((err, result) => {
	// 	if (err) throw err;

		// if (user === result[0].login && password === result[0].password) {
		// 	alert('HELLO')
		// };
	// 	res.json({ data: result });
	// 	console.log(result[0].login)
	// });

	// conn.database.collection("users").findOne(user, function(err, res) {
	// 	if (err) throw err;

	// 	console.log('REQ', req);

	// 	res.send('hello world');

    // console.log("1 document inserted: ", user);
    // conn.database.close();
  // });

	// conn.database.collection('users').findOne(user, (err, suc) => {
	// 	if (err) throw err;

	// 	res.json({ ok: true, message: 'Usuário encontrado com successo!'});
	// });
});

// app.get('/user/:name', (req, res) => {
// 	console.log(req.body, req.params);
// 	res.end();
// });

// app.post('/login', (req, res) => {
// 	const user = { name: req.params.login, email: req.params.password };
// 	console.log('TEST 2', user);
// 	console.log('@@@@@@@@@@@@@@@db.database', db.database.collection());
// 	db.database.collection('viados').insertOne(user, (err, suc) => {
// 		if (err) throw err;

// 		// res.json({ ok: true, message: 'Viado registrado com successo!' });
// 	});
// });

app.listen(9000);
