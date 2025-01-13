import express from 'express';

import { credentialController } from '../controllers/credentialController.js';


export const credentialRouter = express.Router();

credentialRouter.post('/login',credentialController.login);

credentialRouter.post('/signup',credentialController.signup);

credentialRouter.post('/logout',credentialController.logout);