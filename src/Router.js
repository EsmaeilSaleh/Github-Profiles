import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import User from './pages/User'
import NotFound from "./pages/NotFound";

import About from "./pages/About";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";

const Router = () => {
  return (
    <BrowserRouter>
      <GithubProvider>
        <AlertProvider>
          <Box>
            <Container
              sx={{
                mt: "10%",
                height: "100vh",
              }}
            >
              <Header />
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </AlertProvider>
      </GithubProvider>
    </BrowserRouter>
  );
};

export default Router;
