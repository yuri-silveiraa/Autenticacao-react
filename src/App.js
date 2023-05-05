import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Singup } from "./pages/Signup";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/PrivateRoutes";
import { Header } from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route 
          path="/"
          element={
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
          }/>

          <Route 
          path="/update-profile" 
          element={
            <ProtectedRoute>
              <UpdateProfile/>
            </ProtectedRoute>
          }/>

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
