import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Personajes from "../Components/Personajes";
import BackButton from "../Components/BackButton";

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <BackButton/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/personaje/:id" element={<Personajes/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes