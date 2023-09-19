import { NavLink } from "react-router-dom";
import Layout from "../../../components/app/Layout";
import Arrow from "../../../assets/img/app/Arrow 2.svg";
import diamond from "../../../assets/img/advisory/Group 99.svg";
import "../../../styles/app/page/advisory.css";

const AdvisoryPlan: React.FC = () => {
  const backgroundImageUrl = 'url("../../../assets/img/advisory/base.svg")';
  return (
    <Layout pageTitle="Advisory Plan " showUI goBack>
      <div
        className="layout m20 contentBetween"
        style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
      >
        <div className="flex ">
          <div>
            <img
              src={diamond}
              className="pl20 p20"
              style={{ width: "50px", borderRadius: "10px" }}
              alt=""
            />
          </div>
          <div
            style={{
              width: "70%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM textDark">Plan 1</p>
            <p style={{ padding: "0px 0 5px 0px" }}>₹50/ 5 questions </p>
          </div>
        </div>
        <NavLink
          to={"/app/advisory/payment"}
          style={{ height: "70%", width: "20%", margin: "5% 0px 0 0" }}
        >
          <img
            src={Arrow}
            style={{
              width: "50%",
              minWidth: "50px",
              borderRadius: "10px",
              padding: "10px",
            }}
            alt=""
          />
        </NavLink>
      </div>
      <div
        className="layout m20 contentBetween"
        style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
      >
        <div className="flex ">
          <div style={{ backgroundImage: backgroundImageUrl }}>
            <img
              src={diamond}
              className="pl20 p20"
              style={{ width: "50px", borderRadius: "10px" }}
              alt=""
            />
          </div>
          <div
            style={{
              width: "70%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM textDark">Plan 2</p>
            <p style={{ padding: "0px 0 5px 0px" }}>₹150/ 10 questions </p>
          </div>
        </div>
        <NavLink
          to={"/app/advisory/payment"}
          style={{ height: "70%", width: "20%", margin: "5% 0px 0 0" }}
        >
          <img
            src={Arrow}
            style={{
              width: "50%",
              minWidth: "50px",
              borderRadius: "10px",
              padding: "10px",
            }}
            alt=""
          />
        </NavLink>
      </div>{" "}
      <div
        className="layout m20 contentBetween"
        style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
      >
        <div className="flex ">
          <div style={{ backgroundImage: backgroundImageUrl }}>
            <img
              src={diamond}
              className="pl20 p20"
              style={{ width: "50px", borderRadius: "10px" }}
              alt=""
            />
          </div>
          <div
            style={{
              width: "60%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM textDark">Plan 3</p>
            <p style={{ padding: "0px 0 5px 0px" }}>₹200/ 25 questions </p>
          </div>
        </div>
        <NavLink
          to={"/app/advisory/payment"}
          style={{ height: "70%", width: "20%", margin: "5% 0px 0 0" }}
        >
          <img
            src={Arrow}
            style={{
              width: "50%",
              minWidth: "50px",
              borderRadius: "10px",
              padding: "10px",
            }}
            alt=""
          />
        </NavLink>
      </div>
    </Layout>
  );
};

export default AdvisoryPlan;
