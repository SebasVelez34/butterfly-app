import express from 'express';
import controller from './controller';
const router = express.Router();

router.get('/:companyId', controller.getQuestionsByCompany);

module.exports = router;
