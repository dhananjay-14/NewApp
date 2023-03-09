import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
  
  <BrowserRouter>
  <div>
  <NavBar></NavBar>
     <Routes>
          <Route path="/" element={<News key="n" pagesize="6" country="us" category="general" ></News>} />
          <Route path="/Business"element={<News key="b" pagesize="6" country="us" category="business" ></News>}/>
          <Route path="/Entertainment" element={<News key="e" pagesize="6" country="us" category="entertainment" ></News>}/>
          <Route path="/Health" element={<News key="h" pagesize="6" country="us" category="health" ></News>}/>
          <Route path="/Science" element={<News key="s" pagesize="6" country="us" category="science" ></News>}/>
          <Route path="/Sports" element={<News key="sp" pagesize="6" country="us" category="sports" ></News>}/>
          <Route path="/Technology" element={<News key="t" pagesize="6" country="us" category="technology" ></News>}/>
     </Routes>      
 </div>   
  </BrowserRouter>
  
    
     
    )
  }
}

