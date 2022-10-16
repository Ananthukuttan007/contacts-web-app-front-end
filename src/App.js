import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './components/firstMenu/List';
import FormPage from './components/firstMenu/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './components/firstMenu/Info';
import Send from './components/firstMenu/Send';
import MsgList from './components/secondMenu/MsgList';

function App() {
  const [number, setNumber] = useState([]); //root of number object lies here, it is send via props to other components 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List number={number} setNumber={setNumber} />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="/info" element={<Info number={number} />} />
          <Route path="/send" element={<Send number={number} />} />
          <Route path="/msglist" element={<MsgList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
