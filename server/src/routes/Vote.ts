import express from 'express';
import { createVote, getVote } from '../controllers/voteController';

const router = express.Router();
router.post('/create', createVote);
router.get('/get/:name', getVote);

export default router;
