import './App.css';
import MainDash from './components/MainDash.js';
import Sidebar from './components/Sidebar.js'
import RightSide from './components/RightSide/RightSide';


function App() {
  return (
  <div className='App'>
    <div className='AppGlass'>
      <Sidebar/>
      <MainDash/>
      <RightSide/>
    </div>
  </div>    
  );
}

export default App;
