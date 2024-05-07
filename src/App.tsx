import './App.scss';
import CardSumary from './component/Card';
import header from './assets/illustration-hero.svg'
import musicIcon from './assets/icon-music.svg'
function App() {
  return (
    <div className="App">
      <CardSumary bgHeader={header} imgIcon={musicIcon}/>
    </div>
  );
}

export default App;
