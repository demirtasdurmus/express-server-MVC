const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/AppError');


exports.getUsers = catchAsync(async (req, res, next) => {
    res.status(204).send({
        status: 'success',
        data: null
    });
});

exports.getUserById = catchAsync(async (req, res, next) => {
    res.status(204).send({
        status: 'success',
        data: null
    });
});

exports.createUser = catchAsync(async (req, res, next) => {
    // if mail is already registered
    return next(new AppError('This email has alredy been taken!', 400))
    // await User.create(req.user.id, { active: false });
    // res.status(204).send({
    //     status: 'success',
    //     data: null
    // });
});

exports.updateUserById = catchAsync(async (req, res, next) => {
    res.status(204).send({
        status: 'success',
        data: null
    });
});

exports.deleteUserById = catchAsync(async (req, res, next) => {
    res.status(204).send({
        status: 'success',
        data: null
    });
});