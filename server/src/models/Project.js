import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Project name is required'],
        trim: true
    },
    description:{
        type: String,
        default: ''
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Project owner is required']
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    status:{
        type: String,
        enum: ["Planning", "Active", "Completed", "Archived"],
        default: "Planning"
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
}, {timestamps: true});

const Project = mongoose.model('Project', projectSchema);
export default Project;