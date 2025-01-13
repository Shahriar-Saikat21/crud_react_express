import { BrowserRouter,Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
        <Routes>
          <Route path="/" element={<Layout><LoginPage /></Layout>} />
          <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
          <Route path="/home" element={<Layout><HomePage /></Layout>} />
          <Route path="/add" element={<Layout><AddPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
