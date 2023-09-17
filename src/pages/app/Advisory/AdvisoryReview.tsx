import { FC } from "react";
import Layout from './Layout'
import { NavLink } from "react-router-dom";
import diamond from "../../assets/img/advisory/Group 99.svg"; 

const AdvisoryReview:FC = () => {
    const call =[
         {
            name: 'Crop Related Problem',
            crop: '11-9-2023',
            time: '11:00 -12:00pm',
        },
    ]
  return (
    <Layout pageTitle="Review" showUI>
     <p className='heading p40' >Upcoming Calls</p>
    <div>
        {call.map((item) => {
            return (
              <div className='layout m20 flexRow contentBetween'  style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)'}} >
                  <div  style={{width:'70%',display:'inline-block',padding:'8px 0 10px 10px'}} >
                  <h2 className="textMD" >{item.name}</h2>
                  <h3 style={{padding:'8px 0 5px 0px'}}>{item.crop}</h3>
                  <h3>{item.time}</h3>
                  </div>
                  <NavLink  to={"#!"}  className={"btn primary"}
                     style={{height:'70%', width:'30%',margin:"20px 30px 0 0",}}
                    >
                        Edit
                  </NavLink>
              </div>
            )
        })}
        
    </div>
    <p className='heading p40' >Pricing</p>
    <div className='layout m20'  
        style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
      <div>
         <img src={diamond} className="pl20 p20"
            style={{width:'50px', borderRadius:'10px',}}  alt="" />
       </div>
        <div  style={{display:'inline-block',padding:'15px 0 10px 10px'}} >
        <p className="textSM ">Plan 1</p>
        <p className="textDark" style={{padding:'0px 0 5px 0px'}}>₹50/ 5 questions </p>
        </div>
    </div>
    <div className='m40'></div>
    <div className='m40'></div>

    <div className='layout m20 contentBetween'>
      <p className='textMD'>Subtotal </p> <p className= 'textDark' style={{fontSize:'20px',fontWeight:'600'}}> ₹450</p>
    </div>
    <div className='layout m40 contentBetween'>
      <p className='textMD'>Total </p> <p className='textDark ' style={{fontSize:'20px',fontWeight:'600'}}> ₹450</p>
    </div>
    <NavLink to={"#!"} className={"btn primary block m20"} >
        Proceed to Payment
    </NavLink>
    <div className='m40'></div>
    <div className='m40'></div>

    </Layout>
  )
}

export default AdvisoryReview
