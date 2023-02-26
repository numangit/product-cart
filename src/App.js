import { useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div>
      <Navbar setSelectedPage={setSelectedPage} />
      {
        selectedPage === "home"
          ? <Home />
          : <Cart />
      }
    </div>
  );
}

export default App;
