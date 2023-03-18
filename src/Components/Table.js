import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextData from "./ContextData";
import Navbar from "./Navbar";

function Table() {
  const DataContex = useContext(ContextData);
  console.log(DataContex);
  const nav = useNavigate()
  return (

    <div>
      <Navbar />

      <div className="tablehead">
        <h1>Student Details</h1>
        
        <button onClick={()=>{nav('/AddNewStudent')}}>Add New Student</button>
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
          {DataContex.entries.map((item,index ) => (
            // console.log(item, index);
           
              <tr key={index}>
                <td >{item.name}</td>
                <td >{item.age}</td>
                <td >{item.course}</td>
                <td >{item.batch}</td>
                <td >
                  <Link to="/editStudent" state={{data: index }} >
                    Edit
                  </Link>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;