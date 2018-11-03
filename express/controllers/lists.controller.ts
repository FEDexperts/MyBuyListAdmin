import { Router, Request, Response } from 'express';
const router: Router = Router();
router.get('/missing/1', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(missing);
});
router.get('/missing/1/single/', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log('Get single item', req.query.foodId);

    const _missing = missing.find(item => item.itemId == req.query.foodId);

    res.send(_missing);
});
router.get('/shopping', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(shopping);
});
export const ListsController = router;

const missing = [
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 395,
        "itemName": "ממרח שוקולד של חברת נוטלה",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 1164,
        "itemName": "מזולה (ממרח)",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
        "itemId": 2545,
        "itemName": "מללפון",
        "itemUnit": "ק\"ג"
    }
];

const shopping = [
    {
        name: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];