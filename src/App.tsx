// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {LoginForm} from "./components/loginform";
import {SignupForm} from "../src/components/signup-form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
