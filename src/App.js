import './App.css';
import Header from './component/Header';
import OldScore from './component/OldScore';
import Round4 from './component/Round4';
import RoundOpen from './component/RoundOpen';

function App() {
  return (
    <div>
      
        <Header/>
        <div className="Path-4-Copy"></div>
        <RoundOpen/>
        <Round4/>
        <OldScore/>
    </div>
  );
}

export default App;
