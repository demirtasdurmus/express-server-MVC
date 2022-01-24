const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/AppError');
const { sampledb } = require('../models/index')


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

    const user = await sampledb.query(`
    INSERT INTO post 
    (title, content, image, created_at, updated_at)
    VALUES 
    ('durmuş', 2, 'dd@gmail.com', 1, Now()) 
    `);
    console.log(user, "aaaaaaaa");
    // if mail is already registered
    return next(new AppError('This email has alredy been taken!', 400))
    await User.create(req.user.id, { active: false });
    res.status(204).send({
        status: 'success',
        data: null
    });
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