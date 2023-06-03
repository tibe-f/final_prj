import React, { useState } from 'react';
import './App.css';
import SideMenu from './navmenu';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav copy';
import PageContent from './pagecontent'
function App() {
  

  const [toggle, setToggle]= useState(true)
  const Toggle =()=>{
    setToggle(!toggle)
  }
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
 <div>
 <Nav Toggle={Toggle}/>
     </div>
     <div className='row'>
     <space className='row'>
   {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
         
         <SideMenu Toggle={Toggle}/>
         
    </div>}
    {toggle && <div className='col-4 col-md-2'> </div>}
    <div className='col'>
       <PageContent/>
    </div>

    </space>
        
     </div>
    </div>
  )
}

export default App;
