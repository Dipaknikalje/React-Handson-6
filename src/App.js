import './App.css';
import ContextData from './Components/ContextData'
import React , {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
// import ContactUs from './Components/ContactUs'
import ContactUs from './Components/ContctUs';
import Edit from './Components/Edit'
import Table from './Components/Table'
import AddStudent from './Components/AddStudent'
function App() {
  const [data,setData]=useState([{name:"Dipak",id:1,age:24,course:"MERN",batch:"march"},{name:"Ram",id:2,age:23,course:"MERN",batch:"FEb"},{name:"Shyam",id:3,age:23,course:"MERN",batch:"Jan"},{name:"sachin",id:4,age:23,course:"MERN",batch:"Dec"},{name:"Lucky",id:5,age:23,course:"MERN",batch:"Nov"}])

  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/student" element={
      <ContextData.Provider value={{entries:data , updateFunction : setData}}>
        <Table/>
      </ContextData.Provider>
    }/>
    <Route path="/editStudent" element={
      <ContextData.Provider value={{entries:data , updateFunction : setData}}>
        <Edit/>
      </ContextData.Provider>
    }/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
<Route path="/addNewStudent" element={
      <ContextData.Provider value={{entries:data , updateFunction : setData}}>
<AddStudent/>
      </ContextData.Provider>
    }/>
  </Routes>
    </div>
  );
}
export default App;
