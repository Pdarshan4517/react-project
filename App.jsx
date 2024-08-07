import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './WEBSITE SITE/PAGES/Home'
import About from './WEBSITE SITE/PAGES/About'
import Services from './WEBSITE SITE/PAGES/Services'
import Contect from './WEBSITE SITE/PAGES/Contect'
import Adash from './ADMIN SITE/Pages/Adash'
import Addservices from './ADMIN SITE/Pages/Addservices'
import Manageservice from './ADMIN SITE/Pages/Manageservice'
import Ulogin from './WEBSITE SITE/PAGES/Ulogin'
import Profile from './WEBSITE SITE/PAGES/Profile'
import Uregister from './WEBSITE SITE/PAGES/Uregister'
import { ToastContainer } from 'react-toastify'
import Alogin from './ADMIN SITE/Pages/Alogin'
import Usermanage from './ADMIN SITE/Pages/Usermanage'




function App() {
  

  return (
  
    <div>
    <ToastContainer />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<><Home></Home></>}/>
    <Route path='/about' element={<><About></About></>}/>
    <Route path='/services' element={<><Services></Services></>}/>
    <Route path='/contect' element={<><Contect></Contect></>}/>
    <Route path='/Ulogin' element={<><Ulogin></Ulogin></>}/>
    <Route path='/profile' element={<><Profile></Profile></>}/>
    <Route path='/uregister' element={<><Uregister></Uregister></>}/>

    <Route path='/dashboard' element={<><Adash></Adash></>}></Route>
    <Route path='/addservices' element={<><Addservices></Addservices></>}></Route>
    <Route path='/mangeservice' element={<><Manageservice></Manageservice></>}></Route>
    <Route path='/Alogin' element={<><Alogin></Alogin></>}></Route>
    <Route path='/usermanage' element={<><Usermanage></Usermanage></>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
       
    
  )
}

export default App
