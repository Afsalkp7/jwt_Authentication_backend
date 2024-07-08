import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    email: {
        type: String, // Correct property is `type`, not `Types`
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const studentModel = mongoose.model('studentCollection', studentSchema);

export default studentModel;
