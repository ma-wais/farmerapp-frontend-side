import Layout from "./Layout";
import { RiSearch2Line } from "react-icons/ri";
import product from "../../../assets/img/advisory/hoe.svg";
import motor from "../../../assets/img/advisory/motor.svg";
import { NavLink } from "react-router-dom";

const ECommerse: React.FC = () => {
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
    <Layout showUI pageTitle="E Commerse">
      <ul className="list bordered">
        <li>
          <RiSearch2Line style={{ fontSize: "20px" }} />
          <input
            type="text"
            placeholder="Search"
            style={{ outline: "none", border: "none", fontSize: "15px" }}
          />
        </li>
      </ul>

      <div className="layout contentBetween m40">
        <h2 className="textMD textDark">Categories</h2>
        <NavLink
          to={"/app/ECommerse/categories"}
          style={{ textDecoration: "none" }}
        >
          <h3 className="textPrimary">See All</h3>
        </NavLink>
      </div>

      <div
        className="layout flexRow"
        style={{ overflowX: "scroll", width: "95%", flexWrap: "nowrap" }}
      >
        {days.map((day, index) => (
          <div
            className="flexColumn ml20"
            key={index}
            style={{
              border: "1px solid #E9E9E9",
              minWidth: "150px",
              height: "200px",
              borderRadius: "10px",
              padding: "5px",
              backgroundImage: `url(${product})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h5
              style={{ margin: "140px 0 0 8px" }}
              className=" textMD textDark"
            >
              {day.date}
              <p>{day.day}</p>
            </h5>
          </div>
        ))}
      </div>
      <div className="layout contentBetween m40">
        <h2 className="textMD textDark">Trending Products</h2>
        <NavLink
          to={"/app/ECommerse/categoryItems"}
          style={{ textDecoration: "none" }}
        >
          <h3 className="textPrimary">View All</h3>
        </NavLink>
      </div>

      <div
        className="layout flexRow"
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
    </Layout>
  );
};

export default ECommerse;
