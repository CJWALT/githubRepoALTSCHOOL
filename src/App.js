import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import FetchRepo from './components/FetchRepo'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import ErrTest from './components/ErrTest'



const App = () => {
  return (
    <>
      <Router> 
      <Header/>
 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/FetchRepo/*' element={<FetchRepo />}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        
    </Router>
 

 
    <ErrorBoundary>
      <ErrTest/>
    </ErrorBoundary>
    


  <Footer />    
    </>
   
  )
}

export default App