import express from 'express';

import { contactUpdateDeleteController } from '../controllers/contactUpdateDeleteController.js';
import { authentication } from '../middlewares/authentication.js';

export const contactUpdateDeleteRouter = express.Router();

contactUpdateDeleteRouter.put('/update',authentication,contactUpdateDeleteController.update);

contactUpdateDeleteRouter.delete('/delete',authentication,contactUpdateDeleteController.delete);