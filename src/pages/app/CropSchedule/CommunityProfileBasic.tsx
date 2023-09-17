import '../../styles/app/page/ConnectionsProfile.css'
import { FC } from 'react'
import Layout from './Layout'
import { Box } from '@mui/material'
import profileBG from '../../assets/img/app/profile_bg.png'
import profileImg from '../../assets/img/advisory/karna.svg'
import one from "../../assets/img/advisory/Card.svg"; 
import two from "../../assets/img/advisory/Community.svg";
import three from "../../assets/img/advisory/Hindi.svg"; 
import Arrow from "../../assets/img/advisory/Chev Icon.svg"; 
import { NavLink } from 'react-router-dom'


const CommunityProfileBasic: FC = () => {
    return (
        <Layout showUI >
            <Box className="profileBG">
                <img src={profileBG} alt="" />
                <Box className="profileContainer">
                    <Box className="userProfile">
                        <img src={profileImg} alt="" />
                    </Box>
                    <Box className="userName">
                    Karna
                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: '250px' }}></Box>
            <div className='layout m40 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <div>
                    <img src={three}
                        style={{
                            width:'60px', borderRadius:'28px',margin:'12px 10px 12px 10px',
                            backgroundColor: '#FFECD6',padding:'20px'}}  alt="" />
                </div>
                    <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Language</p>
                    </div>
                </div>
                <NavLink to={"#!"} style={{ width:'10%',margin:"0% 0px 0 0"}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 0px 0px 10px'}}  alt="" />
          </NavLink>
            </div>
            <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <div>
                    <img src={one}
                        style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
                </div>
                    <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Subscription</p>
                    </div>
                </div>
                <NavLink to={"#!"} style={{ width:'10%',margin:"0% 0px 0 0"}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 0px 0px 10px'}}  alt="" />
          </NavLink>
            </div>
            <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
            <div className='flex '>
                <div>
                    <img src={two}
                        style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
                </div>
                    <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
                    <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>CommunityProfile</p>
                    </div>
                </div>
                <NavLink to={"#!"} style={{ width:'10%',margin:"0% 0px 0 0"}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 0px 0px 10px'}}  alt="" />
          </NavLink>
            </div>
            

        </Layout>
    )
}

export default CommunityProfileBasic