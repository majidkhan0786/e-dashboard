import Nav from "./Header/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Header/Footer";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/"  element= {<h1>Products Listing </h1>} />
          <Route path="/add" element = {<h1>Add products </h1>} />
          <Route path="/update" element = {<h1> Update Products  </h1>} />
          <Route path="/logout" element = {<h1> Logout </h1>} />
          <Route path="/profile" element = {<h1> Profile Page  </h1>} />
      
      <Route path="/signup" element = {<SignUp/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
