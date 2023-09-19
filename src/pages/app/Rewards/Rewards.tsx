import Layout from "../../../components/app/Layout";
import Bronze from "../../../assets/img/advisory/Bronze.svg";
import coins from "../../../assets/img/advisory/coins.svg";
import gold from "../../../assets/img/advisory/gold.svg";

const Rewards: React.FC = () => {
  return (
    <Layout showUI pageTitle="Rewards">
      <div
        style={{ borderRadius: "10px", border: "1px solid rgb(200,200,200)" }}
      >
        <div className="layout m20">
          <img src={Bronze} alt="bronze Medal" />
          <div className="layout m20 flexColumn">
            <p className="heading">You're off to a great start!</p>
            <p>Coins needed to earn</p>
            <div className="flex">
              <img src={coins} alt="coins" />
              <p className="heading">990</p>
            </div>
          </div>
        </div>
        <div>
          <div className="layout ml20 ">
            <div
              style={{
                width: "85%",
                backgroundColor: "#D9D1C2",
                height: "9px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "5%",
                  height: "100%",
                  backgroundColor: "#C89963",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <img className="coins" src={gold} alt="gold Medal" />
          </div>
          <div
            className="layout contentBetween"
            style={{ width: "86% ", padding: "0 20px" }}
          >
            <p>10 coins collected</p>
            <p>Goal 1000 coins</p>
          </div>
        </div>
      </div>
      <p className="heading m20">Refer</p>
      <div
        className="textCenter m20"
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid rgb(200,200,200)",
        }}
      >
        <h2 className="textDark ">Invite a friend and get 100 coins</h2>
        <p>Give a friend promo code and you'll get 100 coins on your rewards</p>
        <div className="layout m20 ml20" style={{ width: "90%" }}>
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
            Copy Code
          </button>
          <button
            className="btn primary ml20"
            style={{ border: "none", width: "180px" }}
          >
            Share
          </button>
        </div>
        <div className="m20"></div>
      </div>
      <p className="heading m20">Wallet</p>
      <div className="layout ">
        <div
          className="textCenter m20"
          style={{
            width: "50%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid rgb(200,200,200)",
          }}
        >
          <img src={Bronze} alt="bronze Medal" style={{ width: "100%" }} />
          <p className="textCenter"> Bronze Badge</p>
        </div>
        <div
          className="textCenter m20 ml20"
          style={{
            width: "50%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid rgb(200,200,200)",
          }}
        >
          <img src={coins} alt="Coins" style={{ width: "100%" }} />
          <p className="textCenter">10 Coins</p>
        </div>
      </div>
      <div className="m40"></div>
      <div className="m40"></div>
    </Layout>
  );
};

export default Rewards;
