import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Layout from "./Layout";
import logo from "../../assets/img/advisory/Vector.svg";
import { NavLink } from "react-router-dom";
import '../../styles/app/page/advisory.css'

const OrderSuccess: FC = () => {
  return (
    <Layout showUI={false}>
      <Box className="textCenter m40 p40">
        <img src={logo} alt="logo" style={{padding:'50px'}} />
      </Box>
      <Box className="heading textCenter">
      Order Placed Successfully 
      </Box>
      <Typography className="textCenter">
      Your order will be delivered in 3 - 5 days. You can track your order in the My Orders Section. 
      </Typography>
      <NavLink
        to={"/app/ECommerse/MyOrders"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Go to My Orders
      </NavLink>
    </Layout>
  );
};

export default OrderSuccess
