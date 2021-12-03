const { decode } = require("../services/session.services");
const _ = require("lodash")
const deserializeUser = async (
    req,
    res,
    next
) => {
    const accessToken = _.get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );
    if (!accessToken) return next();
    const { decoded, expired } = decode(accessToken);
    if (decoded) {
        req.user = decoded;
        return next();
    }
    return next();
};

module.exports = deserializeUser