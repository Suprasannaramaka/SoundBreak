// src/App.tsx
import { Routes, Route } from "react-router-dom";
import  LoginForm from "./app/routes/loginform";
import  SignupForm  from "./app/routes/signup-form";

function App() {
  return (
      <Routes>
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/signupForm" element={<SignupForm />} />
      </Routes>
  );
}

export default App
