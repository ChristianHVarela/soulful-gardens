import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/signIn'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from './pages/signUp';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn /> } />
        <Route path="/sign-up" element={<SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
