import { BrowserRouter,Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from "./context/AuthContextProvider";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout><LoginPage /></Layout>} />
            <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
            <Route path="/home" element={<PrivateRoute><Layout><HomePage /></Layout></PrivateRoute>} />
            <Route path="/add" element={<PrivateRoute><Layout><AddPage /></Layout></PrivateRoute>} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
