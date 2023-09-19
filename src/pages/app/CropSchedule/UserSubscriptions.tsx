import { NavLink } from "react-router-dom";
import Layout from "../../../components/app/Layout";
import Arrow from "../../../assets/img/app/Arrow 2.svg";
import diamond from "../../../assets/img/advisory/Group 99.svg";
import "../../../styles/app/page/advisory.css";
import ArrowUP from "../../../assets/img/advisory/ArrowUp.svg";

const UserSubscriptions: React.FC = () => {
  return (
    <Layout pageTitle="Subscriptions " showUI goBack>
      <div className="layout m40">
        <h2 className="textDark">Advisory Active Plans</h2>
        <img
          src={ArrowUP}
          style={{ width: "20px", marginLeft: "10px" }}
          alt=""
        />
      </div>
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
              width: "80%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM">Plan 1</p>
            <p style={{ padding: "0px 0 5px 0px", color: "black" }}>
              ₹50/ 5 questions{" "}
            </p>
            <p>3 Remaining | Expires on 13th April 2023</p>
          </div>
        </div>
      </div>
      <div className="layout m40">
        <h2 className="textDark">Crop Schedule Active Plans</h2>
        <img
          src={ArrowUP}
          style={{ width: "20px", marginLeft: "10px" }}
          alt=""
        />
      </div>
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
              width: "80%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM">Plan 1</p>
            <p style={{ padding: "0px 0 5px 0px", color: "black" }}>
              ₹150/ 10 questions{" "}
            </p>
            <p>29 days Remaining | Expires on 13th April 2023</p>
          </div>
        </div>
      </div>
      <div className="layout m40">
        <h2 className="textDark">Payment Validation </h2>
        <img
          src={ArrowUP}
          style={{ width: "20px", marginLeft: "10px" }}
          alt=""
        />
      </div>
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
              width: "80%",
              display: "inline-block",
              padding: "15px 0 10px 10px",
            }}
          >
            <p className="textSM">Plan 1</p>
            <p style={{ padding: "0px 0 5px 0px", color: "black" }}>
              ₹200/ 25 questions{" "}
            </p>
            <p>Approval Pending</p>
          </div>
        </div>
        <NavLink
          to={"#!"}
          style={{ height: "70%", width: "40%", margin: "5% 0px 0 0" }}
        >
          <img
            src={Arrow}
            style={{
              width: "50%",
              minWidth: "50px",
              borderRadius: "10px",
              padding: "10px",
              marginLeft: "40px",
            }}
            alt=""
          />
        </NavLink>
      </div>
    </Layout>
  );
};

export default UserSubscriptions;
