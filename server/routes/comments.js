const fs = require('fs').promises;
const { Router } = require('express');

let router = Router();

router

.get('/read', async (req, res) => {
    try {
        const dataJson = await fs.readFile('./comments.json');
        const commentsArray = JSON.parse(dataJson);
        return res.status(200).json(commentsArray);
    } catch (err) {
        return res.status(500).json({ message: 'An Error Occurred' })
    }
})

.post('/create', async (req, res) => {
    const { name, content } = req.body;
    if (!name || !content) return res.status(400).json({ message: 'Invalid Input' });
    try {
        let dataJson = await fs.readFile('./comments.json');
        const commentsArray = JSON.parse(dataJson);
        commentsArray.push({ name, content });
        dataJson = JSON.stringify(commentsArray, null, 2);
        await fs.writeFile('./comments.json', dataJson);
        return res.status(201).json({ message: 'Comment Added Successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'An Error Occurred' })
    }
})

module.exports = router;