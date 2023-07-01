import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Properties from "./components/Properties";
import PropertyDetail from "./components/PropertyDetail";
import { Container, Box } from "@mui/material";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/properties">Properties</NavLink>
      </nav>
      <Container maxWidth="md">
        <Box sx={{ m: 3 }}>
          <Routes>
            <Route path="/" />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />

            <Route></Route>
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
