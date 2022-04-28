import jwt from 'jsonwebtoken';
import ms from 'ms';

import config from '../config/config';

interface Payload {
  id: string;
}

const generateAccessToken = (payload: Payload): string => {
  const getMilliSecondExpires = ms(config.JWT_ACCESS_TOKEN_EXPIRED);
  const expiresIn = Number(getMilliSecondExpires) / 1000;

  const accessToken = jwt.sign(
    JSON.parse(JSON.stringify(payload)),
    config.JWT_SECRET_ACCESS_TOKEN,
    { expiresIn },
  );

  return accessToken;
};

export { generateAccessToken };
