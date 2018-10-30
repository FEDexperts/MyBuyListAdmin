import { Router, Request, Response } from 'express';
const router: Router = Router();
router.get('/missing/1', (req: Request, res: Response) => {
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
        "listId": 2,
        "ownerId": 1,
        "itemName": "ממרח שוקולד של חברת נוטלה",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
        "itemName": "מזולה (ממרח)",
        "itemUnit": "כף/כפות"
    },
    {
        "listId": 2,
        "ownerId": 1,
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