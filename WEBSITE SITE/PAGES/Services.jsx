import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../COMMON/Header'
import Footer from '../COMMON/Footer'

function Services() {
    useEffect(()=>{
        fetch()
    })

    const [data , setdata]=useState()

    const fetch =async()=>{
        const res = await axios.get(`http://localhost:3000/services`)
        console.log(res.data)
        setdata(res.data)
    }
  return (
    <div>
    <Header></Header>
    <div className="container-xxl service py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
                <div className="nav w-100 nav-pills me-4">
                {
                    data && data.map((value)=>{
                        return(
                            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target={value.id} type="button">
                            <i className="fa fa-car-side fa-2x me-3" />
                            <h4 className="m-0">{value.servicename}</h4>
                        </button>
                        )
                    })
                }

                </div>
            </div>
            <div className="col-lg-8">
                {
                    data && data.map((value)=>{
                        return(
                            <div className="tab-content w-100">
                            <div className="tab-pane fade show active" id={value.id}>
                                <div className="row g-4">
                                    <div className="col-md-6" style={{ minHeight: 350 }}>
                                        <div className="position-relative h-100">
                                            <img className="position-absolute img-fluid w-100 h-100" src={value.serviceimg} style={{ objectFit: 'cover' }} alt />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                        <p className="mb-4">{value.discription}</p>
                                     
                                        <a href className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3" /></a>
                                    </div>
                                </div>
                                </div>
                                </div>
                        )
                    })
                }
            
            </div>
        </div>
    </div>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default Services

