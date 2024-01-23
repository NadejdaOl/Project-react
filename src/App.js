import React from "react";
import { Outlet } from 'react-router-dom'
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { ThemeProvider } from "./context"; 

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
           <Outlet />
        </main>   
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

