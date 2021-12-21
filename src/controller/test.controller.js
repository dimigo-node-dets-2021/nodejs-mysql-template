import { db } from '../model/index.js';
import { HttpException } from '../middleware/errorHandler';
import { signJWT } from '../util/jwt';
const Test = db.tests;
const Users = db.users;
const Op = db.Sequelize.Op;
exports.register = (req, res) => {
  Users.create(req.body)
    .then((data) => {
      res.send('success');
    })
    .catch((err) => {
      throw new HttpException(500, err.message);
    });
};

exports.logintest = (req, res) => {
  const { username, pw } = req.body;
  Users.findOne({ where: { username } })
    .then((data) => {
      if (data) {
        if (data.pw === pw) {
          res.send('success');
        } else if (data.pw !== pw) {
          res.send('account but invaild pw');
        }
      } else {
        res.send('fail');
      }
    })
    .catch((err) => {
      throw new HttpException(500, err.message);
    });
  return;
};

exports.login = async (req, res) => {
  const { username, pw } = req.body;
  Users.findOne({ where: { username } })
    .then(async (data) => {
      if (data) {
        if (data.pw === pw) {
          const a = await signJWT(req.body);
          res.send(a);
        } else if (data.pw !== pw) {
          res.send('account but invaild pw');
        }
      } else {
        res.send('fail');
      }
    })
    .catch((err) => {
      throw new HttpException(500, err.message);
    });
  return;
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Test.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tests.',
      });
    });
};