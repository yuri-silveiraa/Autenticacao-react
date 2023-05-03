import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Singup } from "./pages/Signup";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<UserProfile/>}/>
          <Route path="/update-profile" element={<UpdateProfile/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route 
            path="*" 
            element={
            <div>
              <h1>Not Found</h1>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
