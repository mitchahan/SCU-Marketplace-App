/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the express server/backend of the app.
 */

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 10061;
// const table ='user';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());

/**********************************************************************************************************/
// Routes

// User Routes
app.get('/api/user', (req, res) => {
  pool.query(`SELECT * FROM user;`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

// Product Routes
app.get('/api/products', (req, res) => {
  pool.query(`SELECT * FROM products;`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/api/createProduct', (req, res) => {
  pool.query(`INSERT INTO products (name, price, description, photo) VALUES 
("${req.body.name}", "${req.body.price}", "${req.body.description}", "${req.body.photo}",
0);`, (err, rows) => {
  if (err) {
	res.status(500).send(err);
  } else {
	res.status(200).send(rows);
  }
 });
});

app.post('/api/register', (req, res) => {
  pool.query(`INSERT INTO user (email, password, first_name, last_name, is_seller) VALUES ("${req.body.email}", "${req.body.password}", "${req.body.first_name}", "${req.body.last_name}", 0);`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
    }
  });
});

app.post('/api/login', (req, res) => {
  pool.query(`SELECT email, password FROM user WHERE email="${req.body.email}" AND password="${req.body.password}"`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
    }
  });
});
