// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/pages/loginform";
import { SignupForm } from "./components/pages/signup-form";

function App() {
  return (
      <Routes>
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/signupForm" element={<SignupForm />} />
      </Routes>
  )
}

export default App
