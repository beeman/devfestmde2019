const crypto = require('crypto');

const getHash = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex');

const gravatarUrl = 'https://www.gravatar.com/avatar/';
const gravatarSize = 460;

export const getGravatarUrl = (email = '') =>
  `${gravatarUrl}${getHash(email)}?s=${gravatarSize}`;
