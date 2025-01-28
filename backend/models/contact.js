import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
