import axios from 'axios'
import React, { useState } from 'react'
import Anavbar from '../Common/Anavbar'
import Afooter from '../Common/Afooter'

function Addservices() {
    const[formvalue,setformvalue]=useState({
        id:"",
        servicename:"",
        discription:"",
        serviceimg:""
    })
//   onchange effect//
    const changehandle=(e)=>{
        setformvalue({
            ...formvalue,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value,
        })
    console.log(formvalue)
    }

//    submit //

const submithandle =async(e)=>{
    e.preventDefault()
    
    const res = await axios.post(`http://localhost:3000/services`,formvalue)
    console.log(res.data)
    setformvalue({
        id:"",
        servicename:"",
        discription:"",
        serviceimg:""
    })
}
  return (
    <div>
    <Anavbar></Anavbar>
    <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
    <div className="p-lg-5 pe-lg-0">
        <div className="section-title text-start">
            <h1 className="display-5 mb-4">Add Sevice</h1>
        </div>
        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
        <form onSubmit={submithandle}>
            <div className="row g-3">
                <div className="col-12 col-sm-6">
                    <input type="text" onChange={changehandle} name='servicename' value={formvalue.servicename} className="form-control border-0" placeholder="add service name" style={{ height: 55 }} />
                </div>
                <div className="col-12 col-sm-6">
                    <input  onChange={changehandle} type="url" name='serviceimg' value={formvalue.serviceimg} className="form-control border-0" placeholder="add imgae" style={{ height: 55 }} />
                </div>
            
                <div className="col-12">
                    <textarea name='discription'  onChange={changehandle} value={formvalue.discription} className="form-control border-0" placeholder="add desc" defaultValue={""} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>
<Afooter></Afooter>
    </div>
  )
}

export default Addservices
