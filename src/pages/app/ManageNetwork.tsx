import React from 'react'
import Layout from './Layout'
import { NavLink } from 'react-router-dom';
import Arrow from "../../assets/img/advisory/Chev Icon.svg"; 

const ManageNetwork: React.FC = () => {
  return (
    <Layout showUI goBack pageTitle='Manage Network'>
        <div className='layout m20 contentBetween' style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
            <div style={{width:'80%',display:'inline-block',padding:'25px 0 25px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>
                Manage my Network
            </p>
            </div>
          </div>
          <NavLink to={"#!"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'30px 0px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <div className='layout m20 contentBetween' style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
            <div style={{width:'80%',display:'inline-block',padding:'25px 0 25px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>
                Invitation
            </p>
            </div>
          </div>
          <NavLink to={"#!"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'30px 0px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <div className='layout m20 contentBetween'>
          <div className='flex '>
            <div style={{width:'80%',display:'inline-block',padding:'25px 0 25px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>
                Manage my Network
            </p>
            </div>
          </div>
          <NavLink to={"#!"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'30px 0px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
    </Layout>
  )
}

export default ManageNetwork
