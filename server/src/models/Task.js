import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    description:{
        type: String,
        default: '',
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: [true, 'Project is required'],
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    status:{
        type: String,
        enum: ["Todo", "In Progress", "Review", "Done"],
        default: "Todo"
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Medium"
    },
    dueDate: {
        type: Date,
    },
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);
export default Task