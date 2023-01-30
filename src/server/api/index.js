import express from 'express';
const router = express.Router();

import companyRoutes from './company/routes';
import questionRoutes from './question/routes';
import moodRoutes from './mood/routes';
import AnswerRoutes from './answer/routes';

router.use('/company', companyRoutes);
router.use('/question', questionRoutes);
router.use('/mood', moodRoutes);
router.use('/answer', AnswerRoutes);

export default router;