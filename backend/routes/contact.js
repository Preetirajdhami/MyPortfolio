import express from 'express';
import ContactController from '../controllers/contactController.js';

const router = express.Router();


router.post('/contact', ContactController.saveContactMessage);

export default router;
