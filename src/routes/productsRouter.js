import { Router } from 'express'
import ProductManager from '../ProductManager.js'

const router = Router()
const productManager = new ProductManager('./products.json')

router.get('/', async (req, res) => {
    // Listar todos los productos

    const products = await productManager.getProducts()

    const limit = req.query.limit

    if(limit) products.splice(limit)
    
    res.json(products)
})

router.get('/:pid', async (req, res) => {
    // Mostrar sólo el producto con el id proporcionado

    const pid = req.params.pid
    const product = await productManager.getProductById(pid)

    if(product) res.json(product)
    else res.send({error: 'No se ha encontrado el producto'})
})

router.post('/', async (req, res) => {
    // Agregar nuevo producto con los campos: 
    // id (puede ser autogenerado), title, description, code, price, status, stock, category, thumbnails

    // const product = await productManager.addProduct("Producto prueba 1", "Este es un producto de prueba", "abc123", 200, true, 25, "categoria x", "Sin imagen")

    const product = req.body

    const productAdded = await productManager.addProduct(product)

    res.json({ status: "success", productAdded })
    
})

router.put('/:pid', async (req, res) => {
    // Tomar un producto y actualizarlo por los campos enviados desde el body. NUNCA eliminar o actualizar el id

    const pid = req.params.pid
    console.log(pid)

    const fieldsToUpdate = req.body

    await productManager.updateProduct(pid, fieldsToUpdate)

    res.send("Product updated")

})

router.delete('/:pid', async (req, res) => {
    // Eliminar el producto con el id indicado

    const pid = req.params.pid

    await productManager.deleteProduct(pid)

    res.send("Product deleted")
})



export default router