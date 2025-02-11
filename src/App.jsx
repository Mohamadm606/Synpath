import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MoleculeSketcher from "./components/MoleculeSketcher";
import './App.css'

function App() {

  return (
    <div>
      <h1>2D Molecule Sketcher</h1>
      <MoleculeSketcher />
    </div>
  );
}

export default App
