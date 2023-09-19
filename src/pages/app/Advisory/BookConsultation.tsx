import { FC, useEffect, useState } from "react";
import Layout from "../../../components/app/Layout";

import { NavLink, useNavigate } from "react-router-dom";
import Call from "../../../assets/img/advisory/Group 770502.png";
import FarmService from "../../../service/FarmService";
import { farmInterface } from "../../../Interface/Farm";

const Schedule: FC = () => {
  const backGroundSetter = (url = "", morestyles = {}) => {
    return {
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      ...morestyles,
    };
  };

  const [farms, setFarms] = useState<farmInterface[]>([]);
  const getFarms = async () => {
    FarmService.getFarm().then(({ data }) => {
      console.log(data);
      const { farm } = data;
      setFarms(farm);
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    getFarms();
  }, []);
  return (
    <Layout pageTitle="Crop Schedule" showUI>
      <p className="heading p40">Subscribed Plots</p>
      <div>
        {farms.map((item) => {
          return (
            <div
              className="layout m20 flexRow"
              style={{
                borderRadius: "10px",
                alignItems: "center",
                border: "1px solid rgb(200,200,200)",
                justifyContent: "space-between",
              }}
            >
              <div className="flex flexRow">
                <div
                  style={backGroundSetter(item.image[0], {
                    width: "50px",
                    margin: "auto 10px",
                    borderRadius: "10px",

                    padding: "10px",
                    height: "50px",
                  })}
                ></div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 0 10px 10px",
                    fontSize: "10px",
                  }}
                >
                  <h2 className="textMD">{item.name}</h2>
                  <h3>{item.maincrop}</h3>
                  <h3>{item.location}</h3>
                </div>
              </div>
              <NavLink
                to={"/app/advisory/payment/consultationdate"}
                className={"btn primary"}
                style={{
                  width: "140px",
                  margin: "auto 10px",
                  fontSize: "11px",
                }}
              >
                Ask Advise
              </NavLink>
            </div>
          );
        })}
      </div>
      <p className="heading p40">Book Consultation</p>
      <div className="layout p20">
        <div
          style={{
            backgroundColor: "#FFECD6",
            width: "50%",
            height: "80px",
            borderRadius: "10px",
            minWidth: "100px",
          }}
        >
          <img
            src={Call}
            alt=""
            className="mxAuto p20"
            style={{ display: "block", height: "80%" }}
          />
        </div>
        <div>
          <p style={{ paddingLeft: "20px" }}>
            Get personalized expert guidance for your farm-related queries by
            booking a consultation call with our experienced agricultural team.
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/app/advisory/payment/consultationdate")}
        className={"btn primary m20"}
        style={{ width: "100%" }}
      >
        Book Consultation
      </button>
      <p className="heading p40">Upcoming Calls</p>
      <div style={{ textAlign: "center", margin: "1rem" }}>
        {/* {call.map((item) => {
          return (
            <div
              className="layout m20 flexRow contentBetween"
              style={{
                borderRadius: "10px",
                border: "1px solid rgb(200,200,200)",
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "inline-block",
                  padding: "8px 0 10px 10px",
                }}
              >
                <h2 className="textMD">{item.name}</h2>
                <h3 style={{ padding: "8px 0 5px 0px" }}>{item.crop}</h3>
                <h3>{item.time}</h3>
              </div>
              <NavLink
                to={"#!"}
                className={"btn primary"}
                style={{ height: "70%", width: "40%", margin: "5% 8px 0 0px" }}
              >
                Reschedule
              </NavLink>
            </div>
          );
        })} */}
        No Upcomming calls yet
      </div>
    </Layout>
  );
};

export default Schedule;
