import { Router } from 'express'
import CartManager from '../CartManager.js'

const router = Router()
const cartManager = new CartManager('./carts.json')

router.post('/', async (req, res) => {

    const cart = await cartManager.createCart()
    res.json({status: "success", cart})
})

router.get('/:cid', async (req, res) => {

    const cid = req.params.cid

    const products = await cartManager.getProducts(cid)
    
    res.json({status: "success", products})
})


router.post('/:cid/products/:pid', async (req, res) => {

    const cid = req.params.cid
    const pid = req.params.pid

    await cartManager.addProduct(cid, pid)

    res.send({status: "success", msg: "Producto agregado"})
})

export default router