import React from 'react'
import Layout from './Layout'
import one from "../../assets/img/advisory/background.svg"; 
import { NavLink } from 'react-router-dom';
import Arrow from "../../assets/img/advisory/ArrowGo.svg"; 

const ClaimedRewards:React.FC = () => {
  return (
    <Layout showUI goBack pageTitle='Claimed Rewards'>
      <p className='heading p40'>Active</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
             <img src={one}
                style={{width:'70px', borderRadius:'10px',margin:'6px 10px 6px 6px'}}  alt="" />
              <div style={{width:'50%',display:'inline-block',padding:'5px 0 12px 10px'}} >
                <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
               </div>
          </div>
          <NavLink to={"#!"} style={{ width:'17%'}} >
            <img src={Arrow} 
            style={{minWidth:'10px',margin:'35px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
             <img src={one}
                style={{width:'70px', borderRadius:'10px',margin:'6px 10px 6px 6px'}}  alt="" />
              <div style={{width:'50%',display:'inline-block',padding:'5px 0 12px 10px'}} >
                <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
               </div>
          </div>
          <NavLink to={"#!"} style={{ width:'17%'}} >
            <img src={Arrow} 
            style={{minWidth:'10px',margin:'35px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <p className='heading p40'>Inactive</p>

        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
             <img src={one}
                style={{width:'70px', borderRadius:'10px',margin:'6px 10px 6px 6px'}}  alt="" />
              <div style={{width:'50%',display:'inline-block',padding:'5px 0 12px 10px'}} >
                <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
               </div>
          </div>
          <NavLink to={"#!"} style={{ width:'17%'}} >
            <img src={Arrow} 
            style={{minWidth:'10px',margin:'35px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
             <img src={one}
                style={{width:'70px', borderRadius:'10px',margin:'6px 10px 6px 6px'}}  alt="" />
              <div style={{width:'50%',display:'inline-block',padding:'5px 0 12px 10px'}} >
                <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
               </div>
          </div>
          <NavLink to={"#!"} style={{ width:'17%'}} >
            <img src={Arrow} 
            style={{minWidth:'10px',margin:'35px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
    </Layout>
  )
}

export default ClaimedRewards
