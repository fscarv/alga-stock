import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductsCRUD from '../Products/ProductsCRUD';

function App() {
    return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </div>
  );
}

export default App;
