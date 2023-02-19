import React from 'react';
import Scans from './components/scans/Scans';
import {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from './components/details/Details';
import Variable from './components/variable/Variable';
import { useSessionStorage } from 'usehooks-ts'


function App() {
  const [data, setData] = useSessionStorage("data", []);
  const [selectedScanIndex, setselectedScanIndex] = useSessionStorage("selectedScanIndex", 0);

  useEffect (() => {
    axios.get('https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6').then((response) => {
      setData(response.data.data);
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Scans data = {data} setselectedScanIndex={setselectedScanIndex}/>}/>
              <Route exact path="/scans" element={<Scans data = {data} setselectedScanIndex={setselectedScanIndex}/>}/>
              <Route exact path='/details' element={<Details data = {data} selectedScanIndex={selectedScanIndex}></Details>}></Route>
              <Route exact path='/variable/:id/:id/:id' element={<Variable data={data}></Variable>}></Route>
            </Routes>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
