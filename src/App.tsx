import { Routes, Route } from "react-router-dom";
import  {LoginForm} from "./Login";
import  {SignupForm}  from "./components/pages/signup-form";

function App() {
  return (
      <Routes>
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SignupForm" element={<SignupForm />} />
      </Routes>
  );
}

export default App
