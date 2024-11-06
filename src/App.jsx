import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/main/home/Home"
import About from "./components/main/about/About";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollTop/scrollToTop";
import Resume from "./components/main/resume/Resume";
import Services from "./components/main/services/Services";
import Portfolio from "./components/main/portfolio/Portfolio";
import Contact from "./components/main/contact/Contact";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
    <ScrollToTop/>
    </BrowserRouter>
 
    </>
  )
}
export default App;
