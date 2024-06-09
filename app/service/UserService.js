// service/UserService.js
const UserRepository = require('../repository/UserRepository');

const createUser = async (userData) => {
    return await UserRepository.createUser(userData);
};

module.exports = {
    createUser,
};
