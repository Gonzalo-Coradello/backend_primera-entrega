import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
    // Crear nuevo carrito con la estructura:
    // id (autogenerado), products (array de objetos)
})

router.get('/:cid', (req, res) => {
    // Mostrar productos que pertenezcan a dicho carrito
})


router.post('/:cid/product/:pid', (req, res) => {
    // agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:
    // product (sólo el id), quantity
})


export default router