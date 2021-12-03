const jwt = require("jsonwebtoken");
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICwdWxasqwIBAAKBgQCwqQNBc4IP2ewViqE+ZHbndqGoCZFyAUtrwqqxKmO4k/boSvBisJH6BX
noxFVOjsY+eSXHZqNybrhWRAzutSnpz/QEf/7Vg97g==
-----END CERTIFICATE-----`

const sign = data => {
    return jwt.sign(data, privateKey, { expiresIn: "1y" });
}

const decode = token => {
    try {
        const decoded = jwt.verify(token, privateKey);
        return { valid: true, expired: false, decoded };
      } catch (error) {
        return {
          valid: false,
          expired: error.message === "jwt expired",
          decoded: null,
        };
      }
}

module.exports = {
    sign,
    decode
}
