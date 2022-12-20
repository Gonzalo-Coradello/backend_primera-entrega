import { Router } from 'express'
import CartManager from '../CartManager.js'

const router = Router()
const cartManager = new CartManager('./carts.json')

router.post('/', async (req, res) => {
    // Crear nuevo carrito con la estructura:
    // id (autogenerado), products (array de objetos)

    const cart = await cartManager.createCart()
    res.json({cart})
})

router.get('/:cid', async (req, res) => {
    // Mostrar productos que pertenezcan a dicho carrito
    const cid = req.params.cid

    const products = await cartManager.getProducts(cid)
    
    res.json({products})
})


router.post('/:cid/products/:pid', async (req, res) => {
    // agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:
    // product (sólo el id), quantity

    const cid = req.params.cid
    const pid = req.params.pid

    await cartManager.addProduct(cid, pid)

    res.send('Producto agregado')
})


export default router