import express from 'express';
import controller from './controller';
const router = express.Router();

router.get('/:id', controller.getCompanyById);

module.exports = router;
