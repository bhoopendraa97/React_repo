import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoFound from "./NoFound";
import AboutCompany from "./AboutCompany";
import AboutProduct from "./AboutProduct";
import AboutService from "./AboutService";

const App=()=>{
    return(
      <>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}  >
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="about" element={<About/>}   >
              <Route path="aboutcompany" element={<AboutCompany/>}/>
              <Route path="aboutproduct" element={<AboutProduct/>}/>
              <Route path="aboutservice" element={<AboutService/>}/>
            </Route>
           <Route path="contact" element={<Contact/>}/>
           <Route path="*"      element={<NoFound/>}/>
           </Route>
       </Routes>
        </BrowserRouter>

      </>
    )

  }
  export default App;




