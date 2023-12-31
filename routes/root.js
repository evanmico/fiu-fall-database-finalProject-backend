import express from "express";
const router = express.Router();
import path from 'path';

//the dumb__filename and __dirname import to make them functional :|
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('^/$|/index(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

export { router as rootRouter };