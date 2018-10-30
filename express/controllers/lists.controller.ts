import { Router, Request, Response } from 'express';
const router: Router = Router();
router.get('/missing', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(missing);
});
router.get('/shopping', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(shopping);
});
export const ListsController = router;

const missing = [
    {
        item: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];

const shopping = [
    {
        name: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];