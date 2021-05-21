module.exports = {
    url: `mongodb://${process.env.APP_DB_USER}:${process.env.APP_DB_PW}@localhost:27017/${process.env.APP_DB_NAME}?authSource=admin`
}