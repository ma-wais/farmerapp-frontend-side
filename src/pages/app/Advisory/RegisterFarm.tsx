import { Box } from "@mui/material";
import Layout from "../../../components/app/Layout.js";
import Profile from "../../../assets/img/advisory/profile.svg";

import YChill from "../../../assets/img/advisory/Frame.png";
import Capsicum from "../../../assets/img/advisory/capsicum (1) 3.png";
import Carrot from "../../../assets/img/advisory/carrot.png";
import Cocumber from "../../../assets/img/advisory/cocumber.png";
import eggPlant from "../../../assets/img/advisory/eggplant 6.png";
import Mango from "../../../assets/img/advisory/mango 3.png";
import Onion from "../../../assets/img/advisory/onoin.png";
import Radish from "../../../assets/img/advisory/radish 3.png";
import Tomato from "../../../assets/img/advisory/tomato 4.png";

import {
  myWidget,
  myWidgetTwo,
} from "../../../components/ImageUploader/uploadwidget.js";
import FarmService from "../../../service/FarmService.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { farmInterface } from "../../../Interface/Farm.js";

interface USER {
  _id: string | undefined;
}
interface widgets {
  event: string;
  info: { secure_url: string };
}
const RegisterFarm: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const user: USER = useSelector(selectUser);
  const crops = [
    { name: "Tomato", image: Tomato },
    { name: "Brinjal", image: eggPlant },
    { name: "Capsicum", image: YChill },
    { name: "Capsicum2", image: Capsicum },
    { name: "Cocumber", image: Cocumber },
    { name: "Mango", image: Mango },
    { name: "Carrot", image: Carrot },
    { name: "Mushrooms", image: Onion },
    { name: "Radish", image: Radish },
  ];
  const [formData, setFromData] = useState<farmInterface>({
    image: [],
    name: "",
    location: "",
    pincode: "",
    maincrop: selectedCrop,

    owner: user?._id || "",
    _id: "",
    shedule: [],
  });
  const toggleCropSelection = (cropName: string) => {
    setSelectedCrop((prev) => (prev === cropName ? "" : cropName));
    setFromData((prev) => ({ ...prev, maincrop: cropName }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.image.length === 0) {
      toast.info("Images are required");
      return;
    } else if (formData.maincrop.length === 0) {
      toast.info("Maincrop are required");
      return;
    } else if (formData.pincode.length === 0) {
      toast.info("Pincode are required");
      return;
    } else if (formData.location.length === 0) {
      toast.info("Geolocation are required");
      return;
    }
    try {
      await FarmService.createFarm({ ...formData });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout pageTitle="Register Farm" showUI goBack>
      {" "}
      <Box>
        <p className="heading">Choose a Plot Icon</p>
        <div className="m40">
          <input
            type="file"
            id="myinput"
            accept="image/*;capture=camera"
            capture
            style={{ display: "none", visibility: "hidden" }}
          />
          <label
            htmlFor="myinput"
            id="upload_widget_two"
            className="btn textSM primary textCenter"
            style={{ cursor: "pointer", margin: "10px 0 0 20px" }}
            onClick={() =>
              myWidgetTwo((e: widgets) => {
                if (e?.event === "success") {
                  setFromData((prev) => ({
                    ...prev,
                    image: [...prev.image, e.info.secure_url],
                  }));
                }
              }).open()
            }
          >
            Take a Photo
          </label>

          <label
            htmlFor="imageinput"
            className="btn textSM primary textCenter"
            style={{ cursor: "pointer", margin: "10px 0 0 20px" }}
            id="upload_widget"
            onClick={() =>
              myWidget((e: widgets) => {
                if (e?.event === "success") {
                  setFromData((prev) => ({
                    ...prev,
                    image: [...prev.image, e.info.secure_url],
                  }));
                }
              }).open()
            }
          >
            From Gallery
          </label>
        </div>
      </Box>
      <Box className="p40">
        <p className="heading">Add your First Plot</p>
        <form action="">
          <ul className="list radioList bordered p20">
            <li>
              <img src={Profile} alt="logo" />
              <input
                className="input"
                placeholder="Plot Name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFromData((prev: farmInterface) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                required
              />
            </li>
            <li>
              <img src={Profile} alt="logo" />
              <input
                className="input"
                placeholder="Plot Geolocation"
                required
                value={formData.location}
                onChange={(e) => {
                  setFromData((prev: farmInterface) => ({
                    ...prev,
                    location: e.target.value,
                  }));
                }}
                type="text"
              />
            </li>
            <li>
              <img src={Profile} alt="logo" />
              <input
                required
                className="input"
                value={formData.pincode}
                onChange={(e) => {
                  setFromData((prev: farmInterface) => ({
                    ...prev,
                    pincode: e.target.value,
                  }));
                }}
                placeholder="Plot Pin Code"
                type="text"
              />
            </li>
          </ul>
        </form>
      </Box>
      <Box className="p40 " margin={"10px"}>
        <p className="heading">Main Crop</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {crops.map((crop, index) => (
            <div
              style={{
                width: "30%",
                borderRadius: "10px",
                cursor: "pointer",
                height: "120px",
                marginTop: "10px",
                border:
                  selectedCrop === crop.name
                    ? "3px solid green"
                    : "1px solid rgb(220,220,220)",
              }}
            >
              <img
                onClick={() => toggleCropSelection(crop.name)}
                src={crop.image}
                alt={crop.name}
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "auto",
                  display: "block",
                  marginTop: "15px",
                }}
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {crops[index].name}
              </p>
            </div>
          ))}
        </div>
      </Box>
      <button
        type="button"
        onClick={handleSubmit}
        className={"btn primary block"}
        style={{ marginBottom: "100px" }}
      >
        Proceed
      </button>
    </Layout>
  );
};

export default RegisterFarm;
