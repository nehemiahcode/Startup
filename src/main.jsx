import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Section1 from './Components.jsx'
import { Section2, Section3, Section4, Section5, Section6, Section7, ScrollToTop, Contact,Footer } from './Components.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <ScrollToTop/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
