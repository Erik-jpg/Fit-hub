const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// router.get('/', async (req, res) => {
//     const result = await post.find();
//     res.status(200).json(result);
// });

module.exports = router;