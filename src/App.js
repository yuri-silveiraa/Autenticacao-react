import { AuthProvider } from "./context/authContext";
import { Singup } from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <Singup/>
    </AuthProvider>
  );
}

export default App;
