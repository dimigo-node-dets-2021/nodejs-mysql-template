import jwt from 'jsonwebtoken';
import config from '../../config';
const config = require('../../config');

export const signingOptions = {
  expiresIn: '999d',
};

const getJWTSecret = () => config.jwt_secret;

let secretKeyForJWT;

(async () => {
  try {
    secretKeyForJWT = (await getJWTSecret()).toString();
  } catch (e) {
    console.log(e);
  }
})();

export const signJWT = async (payload) =>
  new Promise((resolve, reject) =>
    jwt.sign(payload, secretKeyForJWT, signingOptions, (error, token) => {
      if (error) reject(console.error);
      resolve(token.toString());
    }),
  );

export const verifyJWT = (token) => jwt.verify(token, secretKeyForJWT, (error, decoded) => !error);

export const decodeJWT = (token) => jwt.verify(token, secretKeyForJWT, (error, decoded) => decoded);
