const jwt = require("jsonwebtoken");
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
KL020qMoBDs5usSbhk7xIVInXTX8bGGJhwC8LckcFD5XTNX0XUltETFrBqpCWW94gz0RBaT6BOSkpFabnjsR3X8sdoUYaRSghIWGGFB8ijivMhwZoPHfAFxCRhq==
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
