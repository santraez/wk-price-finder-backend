import { Router } from 'express';
import * as appCtrl from '../controllers/app.controller';

const router = Router();

router.post('/', appCtrl.searchCodes);

export default router;