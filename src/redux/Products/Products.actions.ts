
import { Action } from "./Products.reducer"
import { ProductCreator } from "../../componentes/Products/ProductForm"
import { getAllProducts } from "../../service/Products.service"

export const getProducts = () => async (dispatch: any) => {
    const products = await getAllProducts()
    dispatch ({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}