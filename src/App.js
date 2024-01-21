import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./context";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
