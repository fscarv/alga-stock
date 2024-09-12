import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import FormWithInfoIcon from '../../utils/InfoIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getAllProducts } from '../../service/Products.service';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
]

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProducts, setUpdatingProducts] = useState<Product | undefined>(undefined)

  useEffect(() => {
    async function fetchData(){
      const _products = await getAllProducts()
      setProducts(_products)
    }

    fetchData()
  }, [])

  getAllProducts().then(console.log)

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        _id: (products.length + 1).toString(),
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product =>
      product._id === newProduct._id
        ? newProduct
        : product
    ))

    setUpdatingProducts(undefined)
  }

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product._id !== id))
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
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id)
        setUpdatingProducts(undefined)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
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

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
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
      </Container>
    </div>
  );
}

export default App;
 