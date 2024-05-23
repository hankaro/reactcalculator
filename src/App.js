import './App.css';
import Calculator from './Calculator';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="main">
        <Calculator />
      </section>
    </div>
  );
}

export default App;
