import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';

function TestComponent (){
  return <img width="16" src="https://cdn1.iconfinder.com/data/icons/search-43/512/20_lense_search_tool_scan-512.png" alt='Lupa' />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      
      <Container>
        <Button 
          onClick={() => window.alert('Clicked!')} 
          appendIcon={<TestComponent />}
        >
         Alert 
        </Button>
      </Container>
    </div>
  );
}

export default App;
