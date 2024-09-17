import React from "react";
import Header from "../componentes/Header";
import Container from "../shared/Container";
import ProductsCRUD from "../componentes/Products/ProductsCRUD";

const HomeView = () => {
    return <>
        <Header title="AlgaStock" />
        <Container>
            <ProductsCRUD />
        </Container>
    </>
}

export default HomeView