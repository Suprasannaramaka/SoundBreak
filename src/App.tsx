// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginForm } from "./components/pages/loginform"
import { SignupForm } from "./components/pages/signup-form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
