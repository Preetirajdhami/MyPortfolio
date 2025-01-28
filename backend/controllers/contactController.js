import Contract from '../models/contact.js'; ``

class ContactController {
    
    static async saveContactMessage(req, res) {
        try {
            const { name, email, message } = req.body;

            
            if (!name || !email || !message) {
                return res.status(400).json({ error: "All fields are required." });
            }

            const newContact = new Contract({
                name,
                email,
                message,
            });

            
            await newContact.save();

            
            return res.status(201).json({ message: "Your message has been sent successfully!" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Something went wrong. Please try again later." });
        }
    }
}

export default ContactController;
