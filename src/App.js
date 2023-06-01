import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Addbook from "./components/Addbook";
// import Protected from "./components/Protected";
import { AuthContext } from "./components/auth-context";
import { useState, useCallback } from "react";

const App = () => {
  const [isLoggedIn, setIsLogged] = useState(false);

  const login = useCallback(() => {
    setIsLogged(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogged(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div>
        <Router>
          <Navbar />
          {/* <img src="/logo512.png" alt="React Logo" height={200} /> */}
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/books" element={<Books />} />
              <Route path="/addbook" element={<Addbook />} />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
