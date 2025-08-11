import '@mantine/core/styles.css';
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import Home from './Pages/Home'
import Investors from './Pages/Investors'
import Companies from './Pages/Companies.jsx'
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx'
import ProjectDetails from './Pages/ProjectDetails.jsx';
import AddProject from './Pages/AddProject.jsx';
function App() {

  return (
    <>
    <MantineProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/investors' element={<Investors/>}/>
      <Route path='/companies' element={<Companies/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/projects/:id' element={<ProjectDetails/>}/>
      <Route path='/addproject' element={<AddProject/>}/>
    </Routes>
    </MantineProvider>
      
    </>
  )
}

export default App
