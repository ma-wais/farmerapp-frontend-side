import React from "react";
import coins from "../../../assets/img/advisory/coins.svg";
import Arrow from "../../../assets/img/advisory//ArrowGo.svg";
import back from "../../../assets/img/advisory/itembottle.svg";
import star from "../../../assets/img/advisory/star.svg";
import { NavLink } from "react-router-dom";
import product from "../../../assets/img/app/profile_bg.png";
import diamond from "../../../assets/img/pooja.svg";
import thumb from "../../../assets/img/Thumb.svg";
import star1 from "../../../assets/img/star 1.svg";
import motor from "../../../assets/img/advisory/motor.svg";

const ItemDetails: React.FC = () => {
  const days = [
    {
      day: "Lorem",
      date: "Ipsum",
    },
    {
      day: "Lorem",
      date: "Ipsum",
    },
    {
      day: "Lorem",
      date: "Ipsum",
    },
    {
      day: "Lorem",
      date: "Ipsum",
    },
    {
      day: "Lorem",
      date: "Ipsum",
    },
  ];
  return (
    <div>
      <img
        src={Arrow}
        style={{
          position: "fixed",
          top: "40px",
          left: "20px",
          cursor: "pointer",
          width: "40px",
          zIndex: "10",
        }}
        alt=""
      />
      <img
        src={back}
        style={{
          transform: "translateY(-20px)",
          width: "100%",
          height: "auto",
        }}
        alt="plot"
      />
      <div className="ml20 mr20">
        <p className="textSM">Category</p>
        <div className="layout contentBetween">
          <p className="heading textDark">Niria</p>
          <p className="heading">₹450</p>
        </div>
        <p className="textDark p20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          pellentesque magna. Ut suscipit, mi vitae tincidunt molestie, justo
          lacus hendrerit elit, sit amet consequat lectus nisl eget est. Integer
          semper eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam non pellentesque magna. Ut suscipit, mi vitae tincidunt
          molestie, justo lacus hendrerit elit, sit amet consequat lectus nisl
          eget est. Integer semper eros.
        </p>
        <NavLink className="navLink m20" to={"/app/ecommerse/checkout"}>
          Proceed To Checkout
        </NavLink>

        <p className="heading p20 textDark">Product Specs</p>
        <div className="layout contentBetween">
          <p className="textSM" style={{ width: "55%" }}>
            Active Ingredient
          </p>
          <p className="mr20">Paclobutrazol 23% w/w SC</p>
        </div>
        <div className="layout contentBetween">
          <p className="textSM" style={{ width: "60%" }}>
            Available Pack Sizez{" "}
          </p>
          <p className="mr20">1000ml, 500ml, 250ml, 100ml</p>
        </div>

        <p className="heading p20 textDark">Antidote</p>
        <p>No specific antidote is known. treat symptomatically.</p>

        <p className="heading p20">Recommended Usage</p>
        <div
          className="layout contentBetween m20  p20"
          style={{ borderBottom: "1px solid rgb(200,200,200)" }}
        >
          <p className="textSM">Crop</p>
          <p className="textMD">No Data</p>
        </div>
        <div
          className="layout contentBetween p20"
          style={{ borderBottom: "1px solid rgb(200,200,200)" }}
        >
          <p className="textSM">Pest</p>
          <p className="textMD">No Data</p>
        </div>
        <div
          className="layout contentBetween p20"
          style={{ borderBottom: "1px solid rgb(200,200,200)" }}
        >
          <p className="textSM">Per Hectare</p>
          <p className="textMD">No Data</p>
        </div>
        <div
          className="layout contentBetween p20"
          style={{ borderBottom: "1px solid rgb(200,200,200)" }}
        >
          <p className="textSM">Per Acre</p>
          <p className="textMD">No Data</p>
        </div>
        <div className="layout contentBetween m40">
          <h2 className="textMD textDark">Related Videos</h2>
          <NavLink
            to={"/app/ECommerse/categories"}
            style={{ textDecoration: "none" }}
          >
            <h3 className="textPrimary">See All</h3>
          </NavLink>
        </div>
        <div
          className="layout flexRow"
          style={{ overflowX: "scroll", flexWrap: "nowrap" }}
        >
          {days.map((day, index) => (
            <div
              className="flexColumn"
              key={index}
              style={{
                border: "1px solid #E9E9E9",
                minWidth: "200px",
                height: "270px",
                borderRadius: "10px",
              }}
            >
              <img
                src={product}
                alt=""
                style={{ width: "100%", height: "60%", borderRadius: "10px" }}
              />
              <div style={{ padding: "10px" }}>
                <div className="layout contentBetween">
                  <p className="textMD">Lorem Ipsum</p>
                  <p> 25:00</p>
                </div>
                <p className="textMD">Lorem Ipsum</p>
                <div className="layout contentBetween">
                  <p>
                    Date and Time |
                    <img
                      src={coins}
                      alt="coins"
                      style={{ width: "20px", marginLeft: "5px" }}
                    />{" "}
                    Earn coins
                  </p>
                  <NavLink to={"!#"}>
                    <img src={Arrow} alt="" style={{ width: "20px" }} />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="textMD m20">Reviews</h2>
        <p className="textMD textCenter">Summary</p>
        <div className="layout">
          <div style={{ width: "75%" }}>
            <div className="layout m20">
              <p className="textMD">5</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "#FFB400",
                  margin: "10px",
                }}
              ></div>
            </div>
            <div className="layout m20">
              <p className="textMD">4</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "10px",
                    backgroundColor: "#FFB400",
                  }}
                ></div>
              </div>
            </div>
            <div className="layout m20">
              <p className="textMD">3</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "10px",
                    backgroundColor: "#FFB400",
                  }}
                ></div>
              </div>
            </div>
            <div className="layout m20">
              <p className="textMD">2</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "10px",
                    backgroundColor: "#FFB400",
                  }}
                >
                  {" "}
                </div>
              </div>
            </div>
            <div className="layout m20">
              <p className="textMD">1</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.06)",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    width: "20%",
                    height: "10px",
                    backgroundColor: "#FFB400",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="layout flexColumn"
            style={{ width: "25%", margin: "80px 1px" }}
          >
            <div className="layout">
              <p className="heading">4.5</p>
              <img
                src={star}
                alt="star"
                style={{ width: "20px", marginLeft: "5px" }}
              />
            </div>
            <p className="textSM m20">273 Reviews</p>
          </div>
        </div>
        <div
          className="m20"
          style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
        >
          <div className="layout contentBetween">
            <div className="flex ">
              <div>
                <img
                  src={diamond}
                  className="pl20 p20"
                  style={{ width: "80px", borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div
                className="ml20"
                style={{ width: "70%", display: "inline-block" }}
              >
                <p className="textMD textDark m20">Pooja</p>
                <p style={{ padding: "0px 0 5px 0px" }}>6 days ago </p>
              </div>
            </div>
            <div className="layout m20">
              <img src={star} alt="" />
              <p className="m20" style={{ margin: "23px 20px 0 10px" }}>
                4.5
              </p>
            </div>
          </div>
          <p className="textMD m20 ml20" style={{ color: "#939393" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
          <div className="m20 ml20 mr20 layout contentBetween">
            <img src={thumb} style={{ width: "20px" }} alt="" />
            <img src={star1} style={{ width: "20px" }} alt="" />
          </div>
          <div className="m20"></div>
        </div>
        <div
          className="m20"
          style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
        >
          <div className="layout contentBetween">
            <div className="flex ">
              <div>
                <img
                  src={diamond}
                  className="pl20 p20"
                  style={{ width: "80px", borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div
                className="ml20"
                style={{ width: "70%", display: "inline-block" }}
              >
                <p className="textMD textDark m20">Pooja</p>
                <p style={{ padding: "0px 0 5px 0px" }}>6 days ago </p>
              </div>
            </div>
            <div className="layout m20">
              <img src={star} alt="" />
              <p className="m20" style={{ margin: "23px 20px 0 10px" }}>
                4.5
              </p>
            </div>
          </div>
          <p className="textMD m20 ml20" style={{ color: "#939393" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
          <div className="m20 ml20 mr20 layout contentBetween">
            <img src={thumb} style={{ width: "20px" }} alt="" />
            <img src={star1} style={{ width: "20px" }} alt="" />
          </div>
          <div className="m20"></div>
        </div>
        <div className="layout contentBetween m40">
          <h2 className="textMD textDark">Trending Products</h2>
          <h3 className="textPrimary">View All</h3>
        </div>

        <div
          className="layout flexRow m20"
          style={{ overflowX: "scroll", width: "95%", flexWrap: "nowrap" }}
        >
          {days.map((day, index) => (
            <div
              className="flexColumn ml20"
              key={index}
              style={{
                border: "1px solid #E9E9E9",
                minWidth: "200px",
                height: "130px",
                borderRadius: "10px",
                padding: "5px",
                backgroundImage: `url(${motor})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="m40"></div>
    </div>
  );
};

export default ItemDetails;
