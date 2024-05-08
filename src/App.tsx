import './App.scss';
import CardSumary from './component/Card';

import headerImg from './assets/illustration-hero.svg'
import musicIcon from './assets/icon-music.svg'
function App() {
  return (
    <div className="App">
      <CardSumary bgHeader={headerImg} imgIcon={musicIcon}/>
    </div>
  );
}

export default App;
