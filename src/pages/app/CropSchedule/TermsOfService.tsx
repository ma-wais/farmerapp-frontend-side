import React from "react";
import Layout from "../../../components/app/Layout";

const TermsOfService: React.FC = () => {
  return (
    <Layout showUI goBack pageTitle="Terms Of Service">
      <div className="ml20">
        <h3 className="textDark textMD"> 1. Terms</h3>
        <p className="p20 textMD">
          Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim.
          Nunc, scelerisque adipiscing condimentum massa dignissim tortor leo
          lacus. Sapien felis ultrices fringilla nisi sit nibh. Etiam volutpat
          nisl ornare lorem mus at a, et pulvinar.
        </p>
        <h3 className="textDark textMD m20">2. Use License</h3>
        <p className="textMD">
          Fermentum erat nisl duis varius risus. Augue ac facilisi porta metus
          enim. Ullamcorper lacus praesent rhoncus, sapien rutrum nulla mattis
          vitae ultrices.
        </p>
        <ul style={{ margin: "20px 0 20px 40px", fontSize: "18px" }}>
          <li>Fermentum erat nisl duis varius risus.</li>
          <li>Augue ac facilisi porta metus enim.</li>
          <li>
            Ullamcorper lacus praesent rhoncus, sapien rutrum nulla mattis vitae
            ultrices.
          </li>
          <li>
            Nunc, scelerisque adipiscing condimentum massa dignissim tortor leo
            lacus.
          </li>
        </ul>
        <p className="m20 textMD">
          Aliquam eget purus sit malesuada tempor euismod. Eget commodo
          ultricies ut elit hendrerit risus. Elementum tellus nisl lectus
          bibendum malesuada orci dui. Nunc pharetra.
        </p>
        <div className="layout m40">
          <button
            className="btn"
            style={{
              color: "#C89963",
              border: "3px solid  #C89963",
              width: "180px",
              borderRadius: "10px",
              background: "none",
            }}
          >
            Decline
          </button>
          <button
            className="btn primary ml20"
            style={{ border: "none", width: "180px" }}
          >
            Accept
          </button>
        </div>
        <div className="p40"></div>
        <div className="m40"></div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
