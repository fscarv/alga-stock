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
    //const [products, setProducts] = useState<Product[]>([])
    const [updatingProducts, setUpdatingProducts] = useState<Product | undefined>(undefined)

    async function fetchData() {
        try {
            // @ts-ignore
            await dispatch(ProductActions.getProducts())
            // Swal.fire('Success!', 'Fetch done', 'success');
        } catch (err: any) {
            Swal.fire('Oops!', err.message, 'error');
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            // @ts-ignore
            dispatch(ProductActions.insertNewProduct(product))
        } catch (err: any) {
            Swal.fire('Oops!', err.message, 'error');
        }
    }

    const handleProductUpdate = async (newProduct: Product) => {
        try {
            // @ts-ignore
            await dispatch(ProductActions.updateProduct(newProduct))
            setUpdatingProducts(undefined)
        } catch (err: any) {
            if (err instanceof Error) {
                Swal.fire('Oops!', err.message, 'error');
            }
        }
    }

    const deleteProduct = async (id: string) => {
        try {
            // @ts-ignore
            await dispatch(ProductActions.deleteProduct(id))
            Swal.fire('Deleted!', 'Product has been deleted.', 'success')
        } catch (err: any) {
            Swal.fire('Oops!', err.message, 'error');
        }
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
        }).then((result: any) => {
            if (result.isConfirmed) {
                deleteProduct(product._id)
            }
        });
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire({
            title: "Product details",
            text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            icon: "info"
        });
    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProducts(product)
    }

    return <>
        <Table
            headers={headers}
            data={props.products}
            enableActions={true}
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
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