/* @author Mitch Hansen
 * @lastModifiedBy Mitch Hansen
 * Description: This file is the express server/backend of the app.
 */

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 10061;
const table ='user';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

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