const db = require('../config/db');
var bcrypt = require('bcrypt');

//define database model

exports.comparePassword = (data, result) => {
  db.query(
    'SELECT * FROM users WHERE username = ?',
    [data.username],
    (error, results, fields) => {
      if (bcrypt.compareSync(data.password, results[0].password)) {
        const data = {
          id: results[0].id,
          username: results[0].username,
          token: results[0].token,
        };
        result(null, data);
      } else {
        result(null, 0);
      }
    }
  );
};

exports.findOneByToken = (data, result) => {
  const sqlQuery = `SELECT * FROM users WHERE token = ${data.token}`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }

    if (row.length) {
      return result(null, row[0]);
    }
    // user not found with id x
    return result({ data: 'not_found' }, null);
  });
};

exports.findOneByUsernameAndPassword = (data, result) => {
  const sqlQuery = `SELECT * FROM users WHERE username = '${data.username}' AND password = '${data.password}'`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }

    if (row.length) {
      return result(null, row[0]);
    }
    // user not found with id x
    return result({ data: 'not_found' }, null);
  });
};

exports.findDetailByUsernameAndToken = (data, result) => {
  const sqlQuery = `SELECT *
  FROM users u JOIN users_detail d ON u.id=d.user_id 
  WHERE username = '${data.username}' AND token = ${data.token}`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }

    if (row.length) {
      return result(null, row[0]);
    }
    // user not found with id x
    return result({ data: 'not_found' }, null);
  });
};

exports.findOneByIdAndToken = (data, result) => {
  const sqlQuery = `SELECT * FROM users WHERE username = '${data.username}' AND password = '${data.passrowd}' AND token = ${data.token}`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }
    if (row.length) {
      return result(null, row[0]);
    }
    return result({ data: 'not_found' }, null);
  });
};

exports.create = (data, result) => {
  let sqlQuery = `INSERT INTO users SET username = '${data.username}', password = '${data.password}', token = ${data.token}`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }

    if (row.affectedRows) {
      let sqlQueryForDetail = `INSERT INTO users_detail SET user_id = ${row.insertId}, fullname = '${data.fullname}', phone = ${data.phone}, note = '${data.note}'`;
      db.query(sqlQueryForDetail, (err, datas) => {
        return result(
          null,
          JSON.stringify({ id: datas.insertId, token: data.token })
        );
      });
    }
  });
};

exports.updatePassword = (data, result) => {
  let sqlQuery = `UPDATE users SET password = '${data.new_password}' WHERE users.id = ${data.id} AND users.token = ${data.token};`;
  db.query(sqlQuery, (err, row) => {
    if (err) {
      return result(err, null);
    }
    if (row.length) {
      return result(null, row[0]);
    }
  });
};
