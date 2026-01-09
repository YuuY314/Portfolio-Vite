import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Page404 from "./pages/Page404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/contacts" element={<Contacts/>}></Route>
                <Route path="*" element={<Page404/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;