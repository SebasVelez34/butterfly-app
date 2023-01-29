import express from 'express';
const router = express.Router();

import companyRoutes from './company/routes';
import questionRoutes from './question/routes';

router.use('/company', companyRoutes);
router.use('/question', questionRoutes);

export default router;