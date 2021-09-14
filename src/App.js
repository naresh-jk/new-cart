import './App.css';
import ShoppingItems from './Components/ShoppingItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShoppingItems/>
      <Sidebar/>
    </div>
  );
}

export default App;
