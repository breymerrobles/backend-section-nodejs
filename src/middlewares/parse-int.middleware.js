module.exports = (req, res, next) => {
    const queryString = req.query;
    for (const key in queryString) {
        const value = queryString[key];
        const length = value.length;
        const isValid = length > 20 ? false : !isNaN(parseInt(value));
        if (isValid) {
            queryString[key] = parseInt(value);
        }
    }
    req.query = queryString;
    next();

};