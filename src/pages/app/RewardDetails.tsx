import React from 'react'
import coins from "../../assets/img/advisory/coins.svg"; 
import Arrow from '../../assets/img/advisory/arrowback.svg'
import back from '../../assets/img/advisory/background.svg'
import one from '../../assets/img/advisory/bgblue.svg'
import { NavLink } from 'react-router-dom';

const RewardDetails:React.FC = () => {
  return (
    <div>
        <img src={Arrow} style={{position:'fixed',top:'40px',left:'20px',cursor:'pointer', width:'40px',zIndex:'10'}}  alt="" />
        <img src={back} style={{transform:'translateY(-20px)' ,width:'100%',height:'auto'}}  alt="plot" />
        <div className='ml20 mr20'>
            <p className='textSM'>Lorem</p>
            <div className='layout contentBetween'>
                <p className='heading textDark'>Lorem</p>
                <div className='layout contentBetween'>
                    <img src={coins} alt="coins" />
                    <p className='heading'>10</p>
                </div>
            </div>
            <p className='textDark p20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non pellentesque magna. Ut suscipit, mi vitae tincidunt molestie, justo lacus hendrerit elit, sit amet consequat lectus nisl eget est. Integer semper eros.
            </p>
            <p className='heading p20 textDark' >Product Specs</p>
            <div className='layout contentBetween'>
                <p className='textSM'>Usage</p>
                <p className='mr20' >Agriculture</p>
            </div>
            <NavLink className='navLink m20' to={"#!"} >
                Claim Product
            </NavLink>
           
            <p className='heading p20'>Followed Practices</p>
            <div className='layout contentBetween m20  p20' 
                style={{borderBottom:'1px solid rgb(200,200,200)'}}>
                <p className='textSM'>Pump Type</p>
                <p className='textMD' >110 PSI</p>
            </div>
            <div className='layout contentBetween p20' 
                style={{borderBottom:'1px solid rgb(200,200,200)'}}>
                <p className='textSM'>Color</p>
                <p className='textMD' >Black</p>
            </div>
            <div className='layout contentBetween p20' 
                style={{borderBottom:'1px solid rgb(200,200,200)'}}>
                <p className='textSM'>Capacity</p>
                <p className='textMD' >110 PSI</p>
            </div>
            <p className='heading p40' >Similar Products</p>
            <div className='layout m20 contentBetween'  
                style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
                <div className='flex '>
                    <img src={one}
                        style={{width:'70px', borderRadius:'10px',margin:'6px 10px 6px 6px'}}  alt="" />
                    <div style={{width:'70%',display:'inline-block',padding:'5px 0 12px 10px'}} >
                        <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='layout mr20' style={{ width:'17%',margin:'12px 10px 0px 10px'}}>
                    <img src={coins} alt="" />
                    <p style={{fontSize:'25px',fontWeight:'600', marginTop:'15px'}}>10</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RewardDetails
