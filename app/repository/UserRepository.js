// repository/UserRepository.js
const User = require('../schema/UserSchema');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

module.exports = {
    createUser,
};