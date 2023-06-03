import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Dashboard from "./routes/dashboard";
import Reports from "./routes/reports";
function AppRoutes() {
  return (
    <Routes>
    <Route path='/routes/dashboard' element= {<Dashboard/>}></Route>
    <Route path='/routes/reports' element= {<Reports/>}></Route>
    </Routes>
  )
} 

export default AppRoutes