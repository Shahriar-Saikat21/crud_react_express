import express from 'express';

import { contactReadWriteController } from '../controllers/contactReadWriteController.js';
import { authentication } from '../middlewares/authentication.js';

export const contactReadWriteRouter = express.Router();

contactReadWriteRouter.post('/add',authentication,contactReadWriteController.add);

contactReadWriteRouter.get('/getAll',authentication,contactReadWriteController.getAll);