import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextData from "./ContextData";

function AddStudent() {
  const DataContex = useContext(ContextData);
const nav = useNavigate()
  const addObj ={
    name:"",
    age:"",
    course:"",
    batch:""
  }

  const handleOnChange =(e) =>{
    addObj[e.target.name] = e.target.value
  }

  const handleUpdate =() =>{
    DataContex.entries.push(addObj)
    nav('/student')
  }
  return (
    <div className="editpart">
    <input placeholder="Name" name='name' onChange={handleOnChange}></input>
    <input placeholder="Age" name='age' onChange={handleOnChange}></input>
   <input placeholder="Course" name='course' onChange={handleOnChange}></input>
     <input placeholder="Batch" name='batch' onChange={handleOnChange}></input>
      {/* <input placeholder={DataContex.entries[index].id} name='id' onChange={handleOnChange}></input> */}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default AddStudent;