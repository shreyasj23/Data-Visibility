import './App.css';
import ProductFullWidth from './ProductFullWidth';
import ProductTable from './ProductionTable';

function App() {
  return (
    <div className="App">
      <h1>My Products</h1>
      <ProductTable/>
      <br/>
      <br/>
      <ProductFullWidth/>
    </div>
  );
}

export default App;