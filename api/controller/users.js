const Users = require('../model/Users');
const error = require('./error');
var bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  Users.comparePassword(data, (err, result) => {
    if (err) {
      error.handling(err, res);
    } else {
      if (result != 0) {
        res.send(result);
      } else {
        res.send('data not matched');
      }
    }
  });
};

exports.register = async (req, res) => {
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  const data = {
    username: req.body.username,
    password: encryptedPassword,
    fullname: req.body.fullname,
    phone: req.body.phone,
    note: req.body.note,
    token: Math.floor(100000 + Math.random() * 900000),
  };
  Users.create(data, (err, result) => {
    if (err) {
      error.handling(err, res);
    } else {
      res.send(result);
    }
  });
};

exports.getDetail = (req, res) => {
  const data = {
    username: req.body.username,
    token: req.headers.token,
  };
  Users.findDetailByUsernameAndToken(data, (err, result) => {
    if (err) {
      error.handling(err, res);
    } else {
      res.send(result);
    }
  });
};

exports.changePassword = (req, res) => {
  const requestDataUser = {
    username: req.body.username,
    password: req.body.password,
    token: req.headers.token,
  };

  const data = {
    id: req.body.id,
    new_password: req.body.new_password,
    token: req.headers.token,
  };
  Users.findOneByIdAndToken(requestDataUser, (err, result) => {
    if (err) {
      console.log(err);
      error.handling(err, res);
    } else {
      if (requestDataUser.password == result.password) {
        Users.updatePassword(data, (errUpdate, updated) => {
          if (errUpdate) {
            error.handling(err, res);
          }
          if (updated.affectedRows) {
            res.send({ updated: 'OK' });
          }
        });
      }
    }
  });
};
