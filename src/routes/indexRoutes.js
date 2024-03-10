import {Router} from 'express';

import routerBook from './BookRoutes.js'


export default function routerApi(app) {
    const router = Router();
    app.use('/api/v1', router);
    router.use('/book', routerBook);
}