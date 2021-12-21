import { verifyJWT, decodeJWT } from '../util/jwt';
import { HttpException } from './errorHandler';

function authMiddleware(req, res, next) {
  const accessToken = req.headers.authorization.split('Bearer ')[1];
  const token = accessToken?.trim();
  if (!token || token.length === 0) {
    next(new HttpException(401, 'No access token provided'));
  } else if (!verifyJWT(token)) {
    next(new HttpException(401, 'Invalid token provided'));
  } else {
    res.locals.decodedData = decodeJWT(token);
    next();
  }
}

export default authMiddleware;
