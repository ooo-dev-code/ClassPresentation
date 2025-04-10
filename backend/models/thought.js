import mongoose from 'mongoose';

const thoughtSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    commentary: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);
export default Thought;