import "../../../styles/app/page/Community.css";
import React from "react";
import Layout from "../Layout";
import { Box, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import BottomSheet, {
  BottomSheetContent,
  BottomSheetHeader,
} from "../../../components/app/BottomSheet";

import Comment from "../../../components/app/Comment";
import personImg from "../../../assets/img/img001.jpg";
import profileImage from "../../../assets/img/img002.jpg";
import profileImage2 from "../../../assets/img/img003.jpg";
import Input from "../../../components/app/Input";
import SimpleInput from "../../../components/app/SimpleInput";

const CommentsBottomSheet = (props: any) => {
  return (
    <BottomSheet {...props}>
      <BottomSheetHeader>
        <span className="textDark" style={{ fontWeight: "bold" }}>
          1,290
        </span>{" "}
        Comments
      </BottomSheetHeader>
      <BottomSheetContent>
        <Comment
          personName={"Karna"}
          profileImage={profileImage}
          comment={"Beautiful"}
          commentTime={"2d"}
          replies={[]}
          liked
        />
        <Comment
          personName={"Suraj"}
          profileImage={profileImage2}
          comment={"good practice"}
          commentTime={"2d"}
          replies={["Reply A", "Reply B", "Reply C"]}
        />
        <Comment
          personName={"Harshith"}
          profileImage={profileImage2}
          comment={"I do the same for my crop"}
          commentTime={"2d"}
          replies={["Reply A", "Reply B", "Reply C"]}
        />
      </BottomSheetContent>

      <SimpleInput
        sx={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "16px",
          width: "90%",
        }}
      >
        <Input placeholder="Comment" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={18}
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M3.19032 1.06387L16.7007 7.62605C17.442 7.9861 17.454 9.03794 16.7211 9.41485L3.18191 16.3779C2.38476 16.7878 1.49241 16.0228 1.77588 15.1724L3.8915 8.8255C3.96182 8.61454 3.95982 8.38615 3.88581 8.17645L1.81042 2.2962C1.51294 1.45333 2.38631 0.673351 3.19032 1.06387Z"
            stroke="#E0B37F"
            strokeWidth="1.5"
          />
          <path
            d="M4 8.5L7 8.5"
            stroke="#E0B37F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </SimpleInput>
    </BottomSheet>
  );
};

const Community = () => {
  const [showBottomSheet, setShowBottomSheet] = React.useState(false);

  return (
    <Layout
      pageTitle="Community"
      showUI
      community
      style={{ paddingBottom: "100px" }}
    >
      <CommentsBottomSheet
        show={showBottomSheet}
        handleClose={() => setShowBottomSheet(false)}
      />
      <Typography className="textDark textMD" marginBottom={"24px"}>
        All Feed
      </Typography>
      <Box className="cards">
        <Box className="card">
          <Box className="header">
            <Box className="profile">
              <Box className="avatar">
                <img
                  src={
                    "https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                />
              </Box>
              <Box>
                <Typography className="name">Nandana</Typography>
                <Typography className="date">25d</Typography>
              </Box>
            </Box>
            <Box>
              <span className="bage">Crop Health</span>
            </Box>
          </Box>
          <Box className="body">
            <Box className="img">
              <img src={personImg} alt="" />
            </Box>
            <Typography className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box className="footer">
            <Box>
              <span className="icon">
                {/* Heart ICON */}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                    stroke="#2C4364"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>2.5K</span>
              </span>
              <span
                className="icon"
                onClick={() => setShowBottomSheet(!showBottomSheet)}
              >
                {/* Comment ICON */}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10H16M8 14H16M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                    stroke="#2C4364"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>3.1K</span>
              </span>
            </Box>
            <Box sx={{ flex: 1, textAlign: "end" }}>
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5956 12.2144C15.0835 12.2181 14.579 12.3379 14.1198 12.5647C13.6606 12.7916 13.2587 13.1195 12.9443 13.524L6.65181 10.3754C6.73276 10.0905 6.77605 9.79621 6.78064 9.50004C6.77605 9.20388 6.73276 8.90961 6.65181 8.62468L12.9443 5.47607C13.2587 5.88059 13.6606 6.20852 14.1198 6.43534C14.579 6.66217 15.0835 6.78198 15.5956 6.78573C16.4947 6.78573 17.3571 6.42827 17.9929 5.79196C18.6287 5.15565 18.9859 4.29266 18.9859 3.39286C18.9859 2.49307 18.6287 1.63004 17.9929 0.993767C17.357 0.357458 16.4947 0 15.5956 0C14.6965 0 13.8341 0.357458 13.1983 0.993767C12.5624 1.63008 12.2053 2.49307 12.2053 3.39286C12.2098 3.68903 12.2531 3.9833 12.3341 4.26823L6.04158 7.41684C5.72719 7.01232 5.3253 6.68439 4.86611 6.45756C4.40692 6.23074 3.9024 6.11093 3.39032 6.10718C2.49116 6.10718 1.62882 6.46464 0.993022 7.10095C0.35719 7.73726 0 8.60025 0 9.50004C0 10.3998 0.35719 11.2629 0.993022 11.8991C1.62885 12.5355 2.4912 12.8929 3.39032 12.8929C3.9024 12.8892 4.40694 12.7694 4.86611 12.5425C5.3253 12.3157 5.72719 11.9878 6.04158 11.5833L12.3341 14.7319C12.1512 15.4172 12.1876 16.1427 12.4381 16.8063C12.6887 17.4699 13.1408 18.0382 13.7308 18.4314C14.3209 18.8245 15.0192 19.0227 15.7276 18.9979C16.4361 18.9733 17.1189 18.727 17.6803 18.2937C18.2416 17.8605 18.653 17.262 18.8569 16.5826C19.0607 15.9031 19.0465 15.1768 18.8164 14.5057C18.5864 13.8348 18.1519 13.2528 17.5741 12.8418C16.9964 12.4308 16.3044 12.2112 15.5956 12.2142L15.5956 12.2144ZM15.5956 1.35709C16.1351 1.35709 16.6525 1.57156 17.034 1.95332C17.4155 2.33509 17.6298 2.85293 17.6298 3.39283C17.6298 3.93272 17.4155 4.45056 17.034 4.83234C16.6525 5.21412 16.1351 5.42857 15.5956 5.42857C15.0561 5.42857 14.5386 5.2141 14.1571 4.83234C13.7756 4.45056 13.5614 3.93272 13.5614 3.39283C13.5614 2.85293 13.7757 2.33509 14.1571 1.95332C14.5386 1.57154 15.0561 1.35709 15.5956 1.35709ZM3.39029 11.5358C2.85079 11.5358 2.33334 11.3213 1.95185 10.9396C1.57036 10.5578 1.35607 10.0399 1.35607 9.50004C1.35607 8.96015 1.57038 8.44231 1.95185 8.06053C2.33334 7.67876 2.85079 7.46431 3.39029 7.46431C3.92978 7.46431 4.44723 7.67877 4.82872 8.06053C5.21021 8.44231 5.4245 8.96015 5.4245 9.50004C5.4245 10.0399 5.21019 10.5578 4.82872 10.9396C4.44723 11.3213 3.92978 11.5358 3.39029 11.5358ZM15.5956 17.643C15.0561 17.643 14.5386 17.4285 14.1571 17.0468C13.7756 16.665 13.5614 16.1472 13.5614 15.6073C13.5614 15.0674 13.7757 14.5495 14.1571 14.1678C14.5386 13.786 15.0561 13.5715 15.5956 13.5715C16.1351 13.5715 16.6525 13.786 17.034 14.1678C17.4155 14.5495 17.6298 15.0674 17.6298 15.6073C17.6298 16.1472 17.4155 16.665 17.034 17.0468C16.6525 17.4286 16.1351 17.643 15.5956 17.643Z"
                  fill="#2C4364"
                />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box className="card">
          <Box className="header">
            <Box className="profile">
              <Box className="avatar">
                <img
                  src={
                    "https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                />
              </Box>
              <Box>
                <Typography className="name">Nandana</Typography>
                <Typography className="date">25d</Typography>
              </Box>
            </Box>
            <Box>
              <span className="bage">Crop Health</span>
            </Box>
          </Box>
          <Box className="body">
            <Box className="img">
              <img src={personImg} alt="" />
            </Box>
            <Typography className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box className="footer">
            <Box>
              <span className="icon">
                {/* Heart ICON */}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                    stroke="#2C4364"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>2.5K</span>
              </span>
              <span className="icon">
                {/* Comment ICON */}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10H16M8 14H16M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                    stroke="#2C4364"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>3.1K</span>
              </span>
            </Box>
            <Box sx={{ flex: 1, textAlign: "end" }}>
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5956 12.2144C15.0835 12.2181 14.579 12.3379 14.1198 12.5647C13.6606 12.7916 13.2587 13.1195 12.9443 13.524L6.65181 10.3754C6.73276 10.0905 6.77605 9.79621 6.78064 9.50004C6.77605 9.20388 6.73276 8.90961 6.65181 8.62468L12.9443 5.47607C13.2587 5.88059 13.6606 6.20852 14.1198 6.43534C14.579 6.66217 15.0835 6.78198 15.5956 6.78573C16.4947 6.78573 17.3571 6.42827 17.9929 5.79196C18.6287 5.15565 18.9859 4.29266 18.9859 3.39286C18.9859 2.49307 18.6287 1.63004 17.9929 0.993767C17.357 0.357458 16.4947 0 15.5956 0C14.6965 0 13.8341 0.357458 13.1983 0.993767C12.5624 1.63008 12.2053 2.49307 12.2053 3.39286C12.2098 3.68903 12.2531 3.9833 12.3341 4.26823L6.04158 7.41684C5.72719 7.01232 5.3253 6.68439 4.86611 6.45756C4.40692 6.23074 3.9024 6.11093 3.39032 6.10718C2.49116 6.10718 1.62882 6.46464 0.993022 7.10095C0.35719 7.73726 0 8.60025 0 9.50004C0 10.3998 0.35719 11.2629 0.993022 11.8991C1.62885 12.5355 2.4912 12.8929 3.39032 12.8929C3.9024 12.8892 4.40694 12.7694 4.86611 12.5425C5.3253 12.3157 5.72719 11.9878 6.04158 11.5833L12.3341 14.7319C12.1512 15.4172 12.1876 16.1427 12.4381 16.8063C12.6887 17.4699 13.1408 18.0382 13.7308 18.4314C14.3209 18.8245 15.0192 19.0227 15.7276 18.9979C16.4361 18.9733 17.1189 18.727 17.6803 18.2937C18.2416 17.8605 18.653 17.262 18.8569 16.5826C19.0607 15.9031 19.0465 15.1768 18.8164 14.5057C18.5864 13.8348 18.1519 13.2528 17.5741 12.8418C16.9964 12.4308 16.3044 12.2112 15.5956 12.2142L15.5956 12.2144ZM15.5956 1.35709C16.1351 1.35709 16.6525 1.57156 17.034 1.95332C17.4155 2.33509 17.6298 2.85293 17.6298 3.39283C17.6298 3.93272 17.4155 4.45056 17.034 4.83234C16.6525 5.21412 16.1351 5.42857 15.5956 5.42857C15.0561 5.42857 14.5386 5.2141 14.1571 4.83234C13.7756 4.45056 13.5614 3.93272 13.5614 3.39283C13.5614 2.85293 13.7757 2.33509 14.1571 1.95332C14.5386 1.57154 15.0561 1.35709 15.5956 1.35709ZM3.39029 11.5358C2.85079 11.5358 2.33334 11.3213 1.95185 10.9396C1.57036 10.5578 1.35607 10.0399 1.35607 9.50004C1.35607 8.96015 1.57038 8.44231 1.95185 8.06053C2.33334 7.67876 2.85079 7.46431 3.39029 7.46431C3.92978 7.46431 4.44723 7.67877 4.82872 8.06053C5.21021 8.44231 5.4245 8.96015 5.4245 9.50004C5.4245 10.0399 5.21019 10.5578 4.82872 10.9396C4.44723 11.3213 3.92978 11.5358 3.39029 11.5358ZM15.5956 17.643C15.0561 17.643 14.5386 17.4285 14.1571 17.0468C13.7756 16.665 13.5614 16.1472 13.5614 15.6073C13.5614 15.0674 13.7757 14.5495 14.1571 14.1678C14.5386 13.786 15.0561 13.5715 15.5956 13.5715C16.1351 13.5715 16.6525 13.786 17.034 14.1678C17.4155 14.5495 17.6298 15.0674 17.6298 15.6073C17.6298 16.1472 17.4155 16.665 17.034 17.0468C16.6525 17.4286 16.1351 17.643 15.5956 17.643Z"
                  fill="#2C4364"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
      <NavLink className={"btn primary fab"} to={"#!"}>
        Create a Post
      </NavLink>
    </Layout>
  );
};

export default Community;
