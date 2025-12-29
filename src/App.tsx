import { Routes, Route } from "react-router-dom";
import  LoginForm from "./components/pages/loginform";
import  SignupForm  from "./components/pages/signup-form";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
  );
}

export default App
