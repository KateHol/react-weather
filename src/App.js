import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather  defaultCity = "Kyiv"/>

   <footer>This project was coded by Kate Holota and is{" "}
    <a href="https://github.com/KateHol/weather" 
    target="_blank"
    rel='noreferrer'>
       open-sourced on GitHub
      </a> and
      <a href="https://helpful-caramel-ab529a.netlify.app"> hosted on Netlify</a>
    </footer> 
    </div>
    </div>
  );
}

