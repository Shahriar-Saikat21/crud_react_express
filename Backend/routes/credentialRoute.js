import express from 'express';

import { credentialController } from '../controllers/credentialController.js';


export const credentialRouter = express.Router();

credentialRouter.get('/login',credentialController.login);

credentialRouter.post('/signup',credentialController.signup);

credentialRouter.get('/logout',credentialController.logout);