import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/index.jsx";
import Home from "./Pages/Home/index.jsx";
import About from "./Pages/About/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";
import Logement from "./Pages/Logement/index.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path={'/logement/:id'} element={<Logement />} />
                <Route path='/about' element={<About/>}  />
                <Route path='*' element={<NotFound/>}  />
            </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
