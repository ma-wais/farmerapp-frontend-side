import Layout from "../../components/app/Layout";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const BasicDateCalendar: React.FC = () => {
  return (
    <Layout showUI goBack pageTitle="Book Consultation">
      <div className="bgWhite">
        <Typography className="textDark textMD p20">
          Enter the Datails
        </Typography>
        <ul className="list radioList bordered p20">
          <li>
            <input className="input" placeholder="Title" type="text" />
          </li>
        </ul>
        <Typography className="textDark textMD p20">All Feed</Typography>

        <div className="p20">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <Typography className="textDark textMD p20">
          Available Time Slots
        </Typography>
      </div>
      <NavLink
        to={"#!"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
        onClick={() => toast.success("Successfully Submitted")}
      >
        Submit
      </NavLink>
      <div className="p40 layout ">
        <p
          className="textMD textDark"
          style={{
            marginLeft: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "15px 6px",
          }}
        >
          03:00 pm - 04:00pm
        </p>
        <p
          className="textMD textDark"
          style={{
            marginLeft: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "15px 6px",
          }}
        >
          03:00 pm - 04:00pm
        </p>
      </div>
      <div className="p40 layout">
        <p>03:00 pm - 04:00pm</p>
        <p>03:00 pm - 04:00pm</p>
      </div>
    </Layout>
  );
};

export default BasicDateCalendar;
