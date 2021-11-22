import React from "react";
import SingUp from './components/Singup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./components/contexts.js/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <SingUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
