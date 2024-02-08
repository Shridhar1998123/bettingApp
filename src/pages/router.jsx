
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Games from "./Games";
import Login from "./login";
import Register from "./register";  
import MatchList from "./matchList";



const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/layout" element={<Layout />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/games" element={<Games />} />
                <Route exact path="/matchlist" element={<MatchList/>} />
            </Routes>
        </HashRouter>

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/contact" element={<Contact />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default Router;