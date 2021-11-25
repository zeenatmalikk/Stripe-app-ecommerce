import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Pay from "./Pay";
import Success from "./Success";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pay/>}/>
      <Route path='/success' element={<Success/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
