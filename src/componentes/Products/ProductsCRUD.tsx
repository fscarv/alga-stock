import React, { useState, useEffect } from "react";
import Table, { TableHeader } from "../../shared/Table";
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "./ProductForm";
import Swal from "sweetalert2";
import FormWithInfoIcon from "../../utils/InfoIcon";
import { connect, useDispatch } from "react-redux";
import * as ProductActions from "../../redux/Products/Products.actions";
import { RootState } from "../../redux";

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true },
]

declare interface ProductsCRUDprops {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDprops> = (props) => {
    const dispatch = useDispatch()

    const showErrorAlert = (err: Error) => Swal.fire('Oops!', err.message, 'error');

    const [updatingProducts, setUpdatingProducts] = useState<Product | undefined>(undefined)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    async function fetchData() {
        // @ts-ignore
        dispatch(ProductActions.getProducts())
            .catch(showErrorAlert)
    }

    const handleProductSubmit = async (product: ProductCreator) => {
        // @ts-ignore
        dispatch(ProductActions.insertNewProduct(product))
            .catch(showErrorAlert)
    }

    const handleProductUpdate = async (newProduct: Product) => {

        // @ts-ignore
        dispatch(ProductActions.updateProduct(newProduct))
            .then(() => setUpdatingProducts(undefined))
            .catch(showErrorAlert)
    }

    const deleteProduct = async (id: string) => {
        // @ts-ignore
        dispatch(ProductActions.deleteProduct(id))
            .then(() => {
                Swal.fire('Deleted!', 'Product has been deleted.', 'success')
            })
            .catch(showErrorAlert)
        setUpdatingProducts(undefined)
    }

    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#09f",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then(({ value }) => value && deleteProduct(product._id))
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire({
            title: "Product details",
            text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            icon: "info"
        });
    }

    return <>
        <Table
            headers={headers}
            data={props.products}
            enableActions={true}
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={setUpdatingProducts}
        />
        <ProductForm
            form={updatingProducts}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
        <FormWithInfoIcon />
    </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)