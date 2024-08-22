import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Managecontact() {
    const [data , setdata]=useState([]);

    useEffect(()=>{
        fetch();
    });

    const fetch=async()=>{
        const res=await axios.get(`http://localhost:3000/contact`)
        console.log(res.data)
        setdata(res.data)
    }
    const deleteHandle = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        toast.success('Categories Delete sucees');
        fetch();
    }
  return (
    <div>
    <div className="container">
        <h2>Manage Contac</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>number</th>
              <th>email</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((Value) => {
                return (
                  <tr>
                    <td>{Value.id}</td>
                    <td>{Value.name}</td>
                    <td>{Value.number}</td>
                    <td>{Value.email}</td>
                    <td>
                     
                      <button className="btn btn-danger" onClick={() => deleteHandle(Value.id)}>Delete </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/*  */}
      </div>
    </div>
  )
}

export default Managecontact
