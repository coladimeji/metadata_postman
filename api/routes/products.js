const express = require('express');
const router = express.Router();

router.get('/' , (req, res, next) => {
    res.status(200).json ({
        message: 'Handling GET requests for /products'
    });
});

router.post('/' , (req, res, next) => {
    res.status(200).json ({
        message: 'Handling POST requests for /products'
    });
});
//send all request to individual products
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID', 
        
            id: id 
        }); 

    } else {

    res.status(200).json({
        message: 'You passed ID test', 
    });
 

    }
});

router.patch ('/:productId', (req, res, next)  =>(
    res.status(200).json ({
        message: 'Product summary updated!'
    })
))

router.delete ('/:productId', (req, res, next)  =>(
    res.status(200).json ({
        message: 'Product summary deleted!'
    })
));
router.post ('/:productId', (req, res, next)  =>(
    res.status(200).json ({
        message: 'Product summary POST!!'
    })
));



module.exports = router;