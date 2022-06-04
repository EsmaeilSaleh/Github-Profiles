import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import NotFound from "./pages/NotFound";

import About from "./pages/About";

const Router = () => {
  return (
    <BrowserRouter>
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default Router;
