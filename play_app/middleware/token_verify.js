const jwt = require("jsonwebtoken");
const config = require('../util/config');
module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, config.SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.decodedToken = decodedToken;
        next();
    });
}
