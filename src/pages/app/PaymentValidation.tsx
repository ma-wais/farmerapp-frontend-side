import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from './Layout'
import diamond from "../../assets/img/advisory/Group 99.svg"; 
import Arrow from '../../assets/img/app/Arrow 2.svg'
import Profile from "../../assets/img/advisory/fileUpload.svg"; 

const PaymentValidation:React.FC = () => {
  return (
   <Layout showUI goBack pageTitle='Payment Validation'>
    <div className='layout m20 contentBetween'  
        style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
      <div className='flex '>
      <div >
         <img src={diamond} className="pl20 p20"
            style={{width:'50px', borderRadius:'10px',}}  alt="" />
       </div>
        <div  style={{width:'80%',display:'inline-block',padding:'15px 0 10px 10px'}} >
        <p className="textSM">Plan 1</p>
        <p style={{padding:'0px 0 5px 0px',color:'black'}}>₹200/ 25 questions </p>
        <p>Approval Pending</p>
        </div>
      </div>
      <NavLink to={"#!"} style={{height:'70%', width:'40%',margin:"5% 0px 0 0"}} >
        <img src={Arrow} 
        style={{width:'50%',minWidth:'50px', borderRadius:'10px',padding:'10px',marginLeft:'40px'}}  alt="" />
      </NavLink>
    </div>
    <p className='heading m20'>Payment Method</p>
    <form action="">
          <ul className='list radioList bordered p20'>
             <li>
                <input className='input' placeholder='Bank Transfer' type="text" />
             </li>
          </ul>
    </form>
     
    <p className='heading m20'>Uploaded</p>
    <form action="">
         <ul className='list radioList bordered p20'>
             <li>
                 <img src={Profile} alt="logo" />
                 <input className='input' placeholder='Plot Name' type="text" />
             </li>
         </ul>
    </form>
    <NavLink
        to={"#!"}
        className={"btn primary block m40"}
        style={{backgroundColor:'rgb(200,200,200)',}}
      >
        Approval Pending
      </NavLink>
   </Layout>
  )
}

export default PaymentValidation
