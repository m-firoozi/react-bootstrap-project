import Header from "./components/header/Header";
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
import Home from "./components/main/Home"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
    <Route path="/" element={<Home/>}/>


    </Routes>
    </BrowserRouter>
 
    </>
  )
}
export default App;
