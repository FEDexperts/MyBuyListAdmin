import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/missing/2', (req: Request, res: Response) => {
    res.send(missing);
});
router.post('/missing/2', (req: Request, res: Response) => {
    console.log('Add new item => ', req.body);

    missing.push({
        listId: 2,
        ownerId: 1,
        itemId: req.body.FoodId,
        itemName: req.body.FoodName,
        itemUnit: ""
    });

    res.send(missing);
});
router.delete('/missing/2', (req: Request, res: Response) => {
    console.log('Remove item => ', req.query);

    const index = missing.findIndex(item => item.itemId == req.query.itemId);
    if (index !== -1) {
        missing.splice(index, 1);
    }

    res.send(missing);
});
router.patch('/missing/2', (req: Request, res: Response) => {
    console.log('update partial item', req.body);

});
router.get('/missing/2/single/', (req: Request, res: Response) => {
    console.log('Get single item', req.query.foodId);

    const _missing = missing.find(item => item.itemId == req.query.foodId);

    res.send(_missing);
});
router.get('/shopping', (req: Request, res: Response) => {
    res.send(shopping);
});
export const ListsController = router;

let missing = [
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

let shopping = [
    {
        name: 'חלב',
        unit: 'יחידה',
        quantity: 3
    }
];