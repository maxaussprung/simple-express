const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;