const jwt = require("jsonwebtoken");

const applyJwt = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT, (err, decoded) => {
            if (err) throw new Error();
            req.userId = decoded.id;
        });
    } finally {
        next();
    }
};

module.exports = applyJwt;
