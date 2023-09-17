import { FC } from "react";
import Layout from './Layout'
import Arrow from '../../assets/img/app/Rectangle 1360.svg'
import { NavLink } from "react-router-dom";
import Call from "../../assets/img/advisory/Group 770502.png"; 

const Schedule:FC = () => {
    const farm =[
        {
            image: Arrow,
            name: 'Farm Name',
            crop: 'Crop',
            location: 'Location',
        },
         {
            image: Arrow,
            name: 'Farm Name',
            crop: 'Crop',
            location: 'Location',
        }
    ]
    const call =[
        {
            name: 'Crop Related Problem',
            crop: '11-9-2023',
            time: '11:00 -12:00pm',
        },
         {
            name: 'Crop Related Problem',
            crop: '11-9-2023',
            time: '11:00 -12:00pm',
        },
    ]
  return (
    <Layout pageTitle="Crop Schedule" showUI>
    <p className='heading p40' >Subscribed Plots</p>
     <div >
        {farm.map((item) => {
            return (
              <div className='layout m20 flexRow'  style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)'}} >
                      <img src={item.image} 
                          style={{width:'25%', borderRadius:'10px',padding:'10px'}}  alt="" />
                      <div  style={{width:'50%',display:'inline-block',padding:'8px 0 10px 10px'}} >
                      <h2 className="textMD">{item.name}</h2>
                      <h3 style={{padding:'8px 0 5px 0px'}}>{item.crop}</h3>
                      <h3>{item.location}</h3>
                      </div>
                      <NavLink
                            to={"#!"}
                            className={"btn primary"}
                            style={{height:'70%', width:'40%',margin:"5% 20px 0 0"}}
                        >
                            Ask Advise
                        </NavLink>
              </div>
            )
        })}
     </div>
     <p className='heading p40' >Book Consultation</p>
     <div className="layout p20">
        <div style={{backgroundColor:'#FFECD6', width:'30%', height:'80px',borderRadius:'10px', minWidth:'60px'}}>
        <img src={Call} alt="" className="mxAuto p20" style={{display: 'block', height:'80%'}} />
        </div>
        <div >
            <p style={{paddingLeft:'20px'}} >Get personalized expert guidance for your farm-related queries by booking a consultation call with our experienced agricultural team.</p>
        </div>
     </div>
     <NavLink  to={"/app/advisory/payment/consultationdate"}  className={"btn primary m20"} >
        Book Consultation
     </NavLink>
     <p className='heading p40' >Upcoming Calls</p>
    <div>
        {call.map((item) => {
            return (
              <div className='layout m20 flexRow contentBetween'  style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)'}} >
                  <div  style={{width:'60%',display:'inline-block',padding:'8px 0 10px 10px'}} >
                  <h2 className="textMD" >{item.name}</h2>
                  <h3 style={{padding:'8px 0 5px 0px'}}>{item.crop}</h3>
                  <h3>{item.time}</h3>
                  </div>
                  <NavLink  to={"#!"}  className={"btn primary"}
                     style={{height:'70%', width:'40%',margin:"5% 8px 0 0px",}}
                    >
                        Reschedule
                    </NavLink>
              </div>
            )
        })}
        
    </div>
    </Layout>
  )
}

export default Schedule
