import logo from './logo.svg';
import './App.css';
import Introduction from './Introduction';
import Introtwo, { Button } from './Introtwo';
import Navbar from './Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <Introduction/>
    <Introtwo/>
    <Button/>
    
    </div>
  );
}

export default App;
