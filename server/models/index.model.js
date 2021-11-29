require('../config/db.connection')

module.exports = {
    User: require("./User.model"),
    TestData: require("./TestData.model"),
    WellData: require("./WellData.model"),
};