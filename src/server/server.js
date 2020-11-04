/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the express server/backend of the app. It also holds all of the API
 * routes.
 */

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;
const table ='accounts';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/accounts', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
