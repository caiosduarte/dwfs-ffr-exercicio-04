import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { ApplicationRoutes } from "./ApplicationRoutes";


export default function App() {
  return (
    <div className="App">
      <h1><Link to="/">Popular Movies' List</Link></h1>   
      <h2><Link to="/favorites">Favorites</Link></h2>   
      <ApplicationRoutes />
    </div>
  );
}
