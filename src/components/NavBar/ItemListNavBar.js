import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../pages/Layout';
import Inicio from '../../pages/Inicio';
import Mesas from '../../pages/Mesas';
import Sillas from '../../pages/Sillas';
import Contactanos from '../../pages/Contactanos';
import Carrito from '../../pages/Carrito';
import Error from '../../pages/Error';
import Productos from '../../pages/Productos';
import Producto from '../../pages/Producto';


function ItemListNavBar(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Inicio/>}/>
                <Route path='mesas' element={<Mesas/>}/>
                <Route path='sillas' element={<Sillas/>}/>
                <Route path='productos' element={<Productos/>}/>
                <Route path='contactanos' element={<Contactanos/>}/>
                <Route path='productos/:productoId' element={<Producto/>}/>
                <Route path='carrito' element={<Carrito/>}/>
                <Route path='*' element={Error}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default ItemListNavBar;