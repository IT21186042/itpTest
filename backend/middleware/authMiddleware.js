const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        req.user = '643e516bf6aa1e23a2e3182c';
        next();
    }
    else {
        return res.status(403).json({ message: "Invalid Token" });
    }


};

const adminMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        req.user = '643e516ef6aa1e23a2e3182d';
        next();
    }
    else {
        return res.status(403).json({ message: "Invalid Token" });
    }

};

const organizerMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        req.user = '643e5172f6aa1e23a2e3182e';
        next();
    }
    else {
        return res.status(403).json({ message: "Invalid Token" });
    }





};

module.exports = {
    userMiddleware,
    adminMiddleware,
    organizerMiddleware
};

