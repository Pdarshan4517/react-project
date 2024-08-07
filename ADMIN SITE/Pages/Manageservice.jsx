import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Anavbar from '../Common/Anavbar'
import Afooter from '../Common/Afooter'

function Manageservice() {
    useEffect(()=>{
        fetch()
    })
    const[data1,setdata1]=useState()

    const fetch = async ()=>{
        const res=await axios.get(`http://localhost:3000/services`)
        console.log(res.data)
        setdata1(res.data)
    }

    // deleat //

    const deleathandle=async(id)=>{
     const res=await axios.delete(`http://localhost:3000/services/${id}`)
     console.log(res.data)
    }

    const[editingservice,seteditingservice]=useState(null)
    const[editedservice,seteditedservice]=useState({
        id:"",
        servicename:"",
        discription:"",
        serviceimg:""
    })

    function savedit(service) {
        seteditingservice(service)
        seteditedservice(service)
    }
    const savesubmithandle=async(e)=>{
    try {
        e.preventDefault()
        await axios.put(`http://localhost:3000/services/${editingservice.id}`,editedservice) 
        fetch()
        seteditingservice(null)
        console.log('upadte sucessfully')
    } catch (error) {
        console.error("error api not res",error)
    }
    }
  return (
    <div>
    <Anavbar></Anavbar>
    <div className="container">
    <div>
        <h1 className='text-center'>Manage service</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Service_name</th>
                    <th scope="col">Service_desc</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data1 && data1.map((value,index)=>{
                    return(
                    <tr key={index}>
                    <th scope="row">{value.id}</th>
                    <td>{value.servicename}</td>
                    <td>{value.discription}</td>
                    <td>
                    <button className='btn btn-primary'>View</button>
                    <button className='btn btn-success mx-2' onClick={()=>savedit(value)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleathandle(value.id)}>Delete</button>
                </td>
                    </tr>
                    )
            })
            }
            </tbody>
            </table>
            {
                editingservice && (
                   <div className="edit-from">
                     <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <div className="section-title text-start">
                                <h1 className="display-5 mb-4">update Sevice</h1>
                            </div>
                            
                            <form >
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text"  value={editedservice.servicename} onChange={(e)=>seteditedservice({...editedservice,servicename:e.target.value})} className="form-control border-0" placeholder="add service name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input  type="url" value={editedservice.serviceimg} onChange={(e)=>seteditedservice({...editedservice,serviceimg:e.target.value})} className="form-control border-0" placeholder="add imgae" style={{ height: 55 }} />
                                    </div>
                                
                                    <div className="col-12">
                                        <textarea  value={editedservice.discription} onChange={(e)=>seteditedservice({...editedservice,discription:e.target.value})}   className="form-control border-0" placeholder="add desc" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={savesubmithandle}>update</button>
                                            </div>
                                            <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" onClick={()=>seteditingservice(null)}>cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   </div>
                )
            }
            </div>
            </div>
            <Afooter></Afooter> 
            </div>         
  )
}

export default Manageservice
