import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import NewNote from "./NewNote";

function App() {
  return (
    <Container className="my-4 ">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}></Route>
          <Route path="edit" element={<h1>Show</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/"></Navigate>} />
      </Routes>
    </Container>
  );
  //going inside route "index" here that's going to match this path (/:id) each one of these routes that underr the /:id are going to be nested
}

export default App;
