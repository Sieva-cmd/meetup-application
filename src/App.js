import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';



const  App =() => {
  return (
    <>
    <Routes>
     
      <Route exact path='/' element = { <AllMeetup />}  ></Route> 
      <Route path='/new-meetup' element = {   <NewMeetup />}  >
     
      </Route>
      <Route path='/favourites' element ={ <Favourites />} >
       
      </Route> 
  
    </Routes>
    </>
  
    
  );
}

export default App;
