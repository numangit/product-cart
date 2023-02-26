import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import store from './redux/store';

function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <Provider store={store}>
      <Navbar setSelectedPage={setSelectedPage} />
      {
        selectedPage === "home"
          ? <Home />
          : <Cart />
      }
    </Provider>
  );
}

export default App;
