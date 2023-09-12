import {Typography } from "@mui/material"
import Layout from "./Layout"
import { NavLink } from "react-router-dom"
import four from "../../assets/img/advisory/QRcode.svg"; 

const QRCode:React.FC = () => {
  return (
    <Layout pageTitle='QR Code'showUI goBack>
        <img src={four} alt="logo" />
      <Typography className="textCenter textDark">
        loremipsum@bank
      </Typography>
        <ul className='list p20'>
          <li >
          <input placeholder='Upload Screenshot' id="imageinput" type="file" accept="image/*" style={{display:'none', visibility:'hidden'}}/>
          <label htmlFor="imageinput" className='input textSM textCenter' style={{cursor:'pointer'}} >Upload Screenshot</label>
          </li>
        </ul>
        <NavLink
          to={"#!"}
          className={"btn primary block"}
          style={{ marginTop: "20px" }}
        >
          Validate Payment
        </NavLink>
    </Layout>
  )
}

export default QRCode
