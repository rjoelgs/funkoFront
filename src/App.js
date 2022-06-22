
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Productos from "./pages/Productos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carrito from "./pages/Carrito";
import FunkoState from "./context/funkos/FunkoState";
import UserState from "./context/users/UserState";
import CarState from "./context/car/CarState";






function App() {

  



  return (
    <div className="App">
      <UserState>
      <FunkoState>
      <CarState>

       <Router>
          <Nav />
          <Routes>

          {/* RUTAS DE AUTENTICACIÓN */}
					  		<Route path='/registro' element={<Register />} />
						  	<Route path='/iniciar-sesion' element={<Login />} />


          {/* RUTAS PUBLICAS */}
            <Route path='/' element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </Router>

      </CarState>
      </FunkoState>
      </UserState>
    </div>
  );
}

export default App;
