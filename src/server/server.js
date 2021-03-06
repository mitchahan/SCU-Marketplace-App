/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the express server/backend of the app.
 */

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.MYSQL_PORT;

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

app.post('/api/getEmail', (req, res) => {
  pool.query(`SELECT email FROM user_products WHERE product_id='${req.body.product_id}' LIMIT 1;`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
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

// Product Routes
app.get('/api/products', (req, res) => {
  pool.query(`SELECT * FROM products WHERE is_sold=0;`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/api/getProduct', (req, res) => {
  pool.query(`SELECT * FROM products WHERE product_id='${req.body.product_id}' LIMIT 1;`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/api/createProduct', (req, res) => {
  console.log(req.body);
  pool.query(`INSERT INTO products (product_id, name, price, description, photo, is_sold) VALUES ("${req.body.product_id}", "${req.body.name}", ${req.body.price}, "${req.body.description}", "${req.body.photo}", ${req.body.is_sold});`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(rows);
      }
  });
});

app.post('/api/linkProduct', (req, res) => {
  pool.query(`INSERT INTO user_products (email, product_id) VALUES ("${req.body.email}", "${req.body.product_id}");`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(rows);
      }
  });
});

app.post('/api/search', (req, res) => {
  pool.query(`SELECT product_id, name, price, description, photo, is_sold FROM (SELECT '1' as relevance, product_id, name, price, description, photo, is_sold FROM products WHERE is_sold=0 AND (description LIKE '%${req.body.query}%' OR name LIKE '%${req.body.query}%')) AS query order by relevance asc;`/*union distinct select '10' as relevance, product_id, name, price, description, photo FROM products WHERE (description LIKE '%${req.body.query.toLowerCase()}%' OR name LIKE '%${req.body.query.toLowerCase()}%') union distinct select '100' as relevance, product_id, name, price, description, photo FROM products WHERE (description LIKE '%${req.body.query[0].toUpperCase() + req.body.query.substring(1)}%' OR name LIKE '%${req.body.query[0].toUpperCase() + req.body.query.substring(1)}%')) AS query order by relevance asc;`*/,
  (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
      console.log(rows);
    }
  });
});

app.post('/api/myProducts', (req, res) => {
  pool.query(`SELECT * FROM products INNER JOIN user_products ON products.product_id = user_products.product_id WHERE user_products.email='${req.body.email}';`,
  (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
      console.log(rows);
    }
  });
});

app.post('/api/delete', (req, res) => {
  pool.query(`DELETE FROM products WHERE product_id='${req.body.product_id}';`,
  (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
      console.log(rows);
    }
  });
});

app.post('/api/sell', (req, res) => {
  pool.query(`UPDATE products SET is_sold=1 WHERE product_id='${req.body.product_id}' LIMIT 1;`,
  (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
      console.log(rows);
    }
  });
});

app.post('/api/myProducts', (req, res) => {
  pool.query(`SELECT * FROM products INNER JOIN user_products ON products.product_id = user_products.product_id WHERE user_products.email='${req.body.email}';`,
  (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
      console.log(rows);
    }
  });
});
