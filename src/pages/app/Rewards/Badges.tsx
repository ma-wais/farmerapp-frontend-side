import React from "react"
import Layout from "./Layout"
import Bronze from "../../assets/img/advisory/Bronze.svg"; 
import gold from "../../assets/img/advisory/GoldMedal.svg"; 

const Badges: React.FC = () => {
  return (
    <Layout showUI goBack pageTitle="Badges">
        <p className="heading m20">Unlocked Badges</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <img src={Bronze} style={{width:'80px',margin:'12px 10px 0px 5px'}} alt="Bronze" />
                <div style={{display:'inline-block',padding:'35px 0 0px 0px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Bronze Badge</p>
                </div>
            </div>
        </div>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <img src={Bronze} style={{width:'80px',margin:'12px 10px 0px 5px'}} alt="Bronze" />
                <div style={{display:'inline-block',padding:'35px 0 0px 0px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Bronze Badge</p>
                </div>
            </div>
        </div>
        <p className="heading m20">Locked Badges</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <img src={gold} style={{width:'70px',margin:'12px 10px 10px 15px'}} alt="Bronze" />
                <div style={{display:'inline-block',padding:'20px 0 0px 10px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Gold Badge</p>
                    <p>Need 1000 coins to unlock</p>
                </div>
            </div>
        </div>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <img src={gold} style={{width:'70px',margin:'12px 10px 10px 15px'}} alt="Bronze" />
                <div style={{display:'inline-block',padding:'20px 0 0px 10px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Gold Badge</p>
                    <p>Need 1000 coins to unlock</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Badges
