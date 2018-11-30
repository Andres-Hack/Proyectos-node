const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        mensaje: 'Primer dato',
        dato: 'Segundo dato'
    })
});

module.exports = router;