import React from "react";
import SingUp from './components/Singup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./components/contexts.js/AuthContext";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error from "./components/Error";

function App() {
  return (
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{maxWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route path="/" exact element={<Dashboard />} />
                  <Route path="/singup" exact element={<SingUp />} />
                  <Route path="/login" exact element={<Login />} />
                  <Route path="*" exact element={<Error />} />
                </Routes> 
              </AuthProvider>
            </Router>
            </div>
          </Container>      
  );
}

export default App;
