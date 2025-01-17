import express from 'express';
import { registerUser, authUser, getAlluser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);


router.get('/', getAlluser);

export default router;
