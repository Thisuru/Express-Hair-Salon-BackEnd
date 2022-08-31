import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

uuidv4(); 

const users = [
    {
        firstname: "thisuru",
        lastname: "deesan",
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});

    res.send('POST route reached');
});

router.get('/:id', (req, res) => {
    console.log(req.params);

    res.send(req.params);
})

export default router;