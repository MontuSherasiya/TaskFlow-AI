import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required'],
        maxlength: [50, 'Full name cannot exceed 50 characters'],
        minlength: [3, 'Full name must be at least 3 characters long'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: [30, 'Username cannot exceed 30 characters'],
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [15, 'Password cannot exceed 15 characters'],
        select: false, // Exclude password from query results by default
    },
    avatar: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'member'],
        default: 'member'
    }, 
    isVerified: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    lastLogin: {
        type: Date,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;