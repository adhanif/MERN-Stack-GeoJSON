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
        <NavLink to="/properties">Home</NavLink>
      </nav>
      <Container maxWidth="md">
        <Box sx={{ m: 3 }}>
          <Routes>
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
