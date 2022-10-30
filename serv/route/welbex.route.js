const Router = require('express')
const router = new Router()
const welbexController = require('../controller/welbex.controller')

router.post('/post', welbexController.cratePost)
router.get('/post', welbexController.cratePost)
router.get('/post/filter', welbexController.filterPost)
router.delete('/post/:id', welbexController.deletePost)

module.exports = router