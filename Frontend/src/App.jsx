import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatPost from './pages/CreatPost';
import Feed from './pages/Feed'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatPost></CreatPost>}></Route>
        <Route path='/feed' element={<Feed/> }></Route>
      </Routes>
    </Router>
  )
}


export default App