import Nav from "./Header/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Header/Footer";
import SignUp from "./Components/SignUp";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {/* withOut SignUp you Can see this comnponet first you have SignUp and
          after that you can visit this componet */}
          <Route element={<PrivateComponent />}   >
            <Route path="/" element={<h1>Products Listing </h1>} />
            <Route path="/add" element={<h1>Add products </h1>} />
            <Route path="/update" element={<h1> Update Products </h1>} />
            <Route path="/logout" element={<h1> Logout </h1>} />
            <Route path="/profile" element={<h1> Profile Page </h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
