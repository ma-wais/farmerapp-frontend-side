import React from "react"
import Layout from "./Layout"
import Arrow from '../../assets/img/advisory/notifImg.svg'
import diamond from '../../assets/img/advisory/notif 1.svg'
import diamond2 from '../../assets/img/advisory/notif 2.svg'

const Notifications:React.FC = () => {
  return (
    <Layout showUI goBack pageTitle="Notifications">
       <div>
        <h3 className='textDark textMD'>Today</h3>
        <div className='layout m20 contentBetween' style={{borderRadius:'10px'}} >
             <img src={diamond} className="pl20 "
                style={{width:'70px', borderRadius:'10px',}}  alt="" />
                <div  style={{width:'80%',display:'inline-block',padding:'10px 0 10px 10px',borderBottom:'1px solid rgb(200,200,200)',}} >
                    <p className="textSM textDark">Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.</p>
                    <p >9:01am </p>
            </div>
                <img src={Arrow} 
                style={{width:'30px', borderRadius:'10px',marginRight:'20px'}}  alt="" />
        </div>
       </div>
       <div>
        <div className='layout contentBetween' style={{borderRadius:'10px'}} >
             <img src={diamond2} className="pl20 "
                style={{width:'70px', borderRadius:'10px',}}  alt="" />
                <div  style={{width:'80%',display:'inline-block',padding:'10px 0 10px 10px',borderBottom:'1px solid rgb(200,200,200)',}} >
                    <p className="textSM textDark">Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.</p>
                    <p >9:01am </p>
            </div>
                <img src={Arrow} 
                style={{width:'30px', borderRadius:'10px',marginRight:'20px'}}  alt="" />
        </div>
       </div> 
       <div>
        <div className='layout contentBetween' style={{borderRadius:'10px'}} >
             <img src={diamond} className="pl20 "
                style={{width:'70px', borderRadius:'10px',}}  alt="" />
                <div  style={{width:'80%',display:'inline-block',padding:'10px 0 10px 10px',borderBottom:'1px solid rgb(200,200,200)',}} >
                    <p className="textSM textDark">Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.</p>
                    <p >9:01am </p>
            </div>
                <img src={Arrow} 
                style={{width:'30px', borderRadius:'10px',marginRight:'20px'}}  alt="" />
        </div>
       </div>
       <div>
       <h3 className='textDark textMD m20'>Yesterday</h3>

        <div className='layout contentBetween m20' style={{borderRadius:'10px'}} >
             <img src={diamond2} className="pl20 "
                style={{width:'70px', borderRadius:'10px',}}  alt="" />
                <div  style={{width:'80%',display:'inline-block',padding:'10px 0 10px 10px',borderBottom:'1px solid rgb(200,200,200)',}} >
                    <p className="textSM textDark">Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.</p>
                    <p >9:01am </p>
            </div>
                <img src={Arrow} 
                style={{width:'30px', borderRadius:'10px',marginRight:'20px'}}  alt="" />
        </div>
       </div>
       <div>
        <div className='layout contentBetween' style={{borderRadius:'10px'}} >
             <img src={diamond2} className="pl20 "
                style={{width:'70px', borderRadius:'10px',}}  alt="" />
                <div  style={{width:'80%',display:'inline-block',padding:'10px 0 10px 10px',borderBottom:'1px solid rgb(200,200,200)',}} >
                    <p className="textSM textDark">Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.</p>
                    <p >9:01am </p>
            </div>
                <img src={Arrow} 
                style={{width:'30px', borderRadius:'10px',marginRight:'20px'}}  alt="" />
        </div>
       </div>
    </Layout>
  )
}

export default Notifications
