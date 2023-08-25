import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/header';
import Homepage from './components/homepage';
import Everything from './components/everything';
import { useState } from 'react';
function App() {
  const [search,setSearch]=useState('');
  const searchHandle=(value)=>{
    console.log('search value ',value);
    setSearch(value)
  }
  return (
    <>
      <Header onSearch={searchHandle}/>
      <div className='container' style={{ marginTop: "20px" }}>
        <Routes>
          <Route path='/' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'general'} />} />

          <Route path='/business' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'business'} />} />


          <Route path='/entertainment' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'entertainment'} />} />
          <Route path='/health' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'health'} />} />


          <Route path='/science' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'science'} />} />


          <Route path='/sports' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'sports'} />} />


          <Route path='/technology' element={<Homepage page={'1'} heading={'top-headlines'} pageSize={'9'} category={'technology'} />} />
          <Route path='/search' element={<Everything Search={search} page={'1'} pageSize={'9'} />}/>

        </Routes>
      </div>
    </>
  )
}

export default App;
