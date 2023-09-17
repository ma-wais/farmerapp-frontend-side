import { NavLink } from 'react-router-dom'
import { FC } from "react";
import { Box, Typography } from '@mui/material'
import logo from "../../assets/img/advisory/Group 770581.svg"; 
import Layout from './Layout';

const PlotAdvisory:FC = () => {
  return (
    <>
    <Layout showUI={false} >
    <Box>
        <div className='layout pl20'>
            <div>
                <img src={logo} alt=""  style={{width:'45px'}}/>
            </div>
            <div className='pl20'> 
                <h3>Plot-Name . Advisory</h3>
                <p>Online</p>
            </div>
        </div>
    </Box>
    <Box className="textCenter p40">
        <img src={logo} alt="logo" />
      </Box>
      <Box className="heading textCenter">
        You haven't subscribed to this!
      </Box>
      <Typography className="textCenter">
      Get a detailed advisory help for your farm. Get your Advisory now!
      </Typography>
      <NavLink
        to={"/app/advisory/advisoryPlan"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Get Advisory Plan
      </NavLink>
    </Layout>
    </>
  )
}

export default PlotAdvisory
