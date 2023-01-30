import express from 'express';
import controller from './controller';
const router = express.Router();

router.post('/:companyId', controller.saveAnswers);

export default router;
