import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';

function TestComponent (){
  return <img width="16" src="https://cdn1.iconfinder.com/data/icons/search-43/512/20_lense_search_tool_scan-512.png" alt='Lupa' />
}

function App() {
  const [street, setStreet] = useState('')
  return (
    <div className="App">
      <Header title="AlgaStock" />
      
      <Container>
        <ul>
        {
        ['Abacate', 'Melancia', 'Manga', 'Abacate'].map((fruit, index) => {
          return <li key={index}>
            {fruit}
          </li>
        })
        }
        </ul>
      </Container>
    </div>
  );
}

export default App;
