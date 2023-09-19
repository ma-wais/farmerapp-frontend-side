import React from "react";
import Layout from "../../../components/app/Layout";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
import { DateRange } from "@mui/x-date-pickers-pro/internals/models";
import dayjs, { Dayjs } from "dayjs";
const BasicDateCalendar: React.FC = () => {
  const [value, setValue] = React.useState<DateRange<Dayjs>>(() => [
    dayjs("2022-04-17T15:30"),
    dayjs("2022-04-17T18:30"),
  ]);
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
      <div className="p40 layout time-selector" style={{ gap: "1rem" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SingleInputTimeRangeField
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SingleInputTimeRangeField
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </Layout>
  );
};

export default BasicDateCalendar;
