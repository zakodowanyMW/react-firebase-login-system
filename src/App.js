import React from "react";
import SingUp from './components/Singup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./components/contexts/AuthContext";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Error from "./components/Error";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{maxWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route path="/" exact element={<PrivateRoute />} />
                  <Route path="/singup" exact element={<SingUp />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/forgot-password" exact element={<ForgotPassword/>} />
                  <Route path="*" exact element={<Error />} />
                </Routes> 
              </AuthProvider>
            </Router>
            </div>
          </Container>      
  );
}

export default App;
