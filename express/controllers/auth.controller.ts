const users = [
    {
        "email": "test@gmail.com",
        "pass": "test",
        "firstName": "Oren",
        "lastName": "Levi",
        "mobile": "054-7637174",
        "address": "Ariel",
        "id": 1
    }
];

import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    const email = req.query['email'];
    const pass = req.query['pass'];

    const user = users
        .find(user => user.email === email && user.pass === pass)
        // .map(user => {
        //     return {
        //         id: user.id,
        //         firstName: user.firstName,
        //         lastName: user.lastName,
        //         mobile: user.mobile,
        //         address: user.address
        //     }
        // })

    res.send(user);
});

export const AuthController: Router = router;

