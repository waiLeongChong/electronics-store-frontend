// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// COMPONENTS
import NavBar from "./Components/NavBar";
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';


// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit"
import FourOFour from "./Pages/FourOFour";


// STYLE CSS
import './App.css';


function App() {
  return (
    <CartProvider>    
      <div className="App">
        <Router>       
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Index />} />
            <Route path="/electronics/new" element={<New />}/>
            <Route path="/electronics/:id" element={<Show />}/>
            <Route path="/electronics/:id/edit" element={<Edit />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<FourOFour />}/>
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
