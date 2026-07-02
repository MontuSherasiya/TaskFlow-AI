import User from '../models/User.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

const registerUser = async (userData) => {
    const {fullname, username, email, password} = userData;

    //check email exists
    const emailExists = await User.findOne({email});

    if(emailExists){
        throw new Error('Email already exists');
    }

    //check username exists
    const usernameExists = await User.findOne({username});

    if(usernameExists){
        throw new Error('Username already exists');
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user
    const user = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword
    });

    //Generate token
    const token = generateToken(user._id);

    return{
        success: true,
        message: 'User registered successfully',
        token,
        user:{
            id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            role: user.role
        }
    }
}

export default registerUser;