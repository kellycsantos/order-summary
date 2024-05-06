import './App.scss';
import CardSumary from './component/Card';
import header from './assets/illustration-hero.svg'
function App() {
  return (
    <div className="App">
      <CardSumary bgHeader={header} />
    </div>
  );
}

export default App;
