import "./styles/global.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SplashScreen from "./pages/app/LoginSignup/SplashScreen";
import ChooseLanguage from "./pages/app/LoginSignup/ChooseLanguage";
import Onboarding from "./pages/app/Onboarding";
import ChooseAccount from "./pages/app/LoginSignup/ChooseAccount";
import Signup from "./pages/app/LoginSignup/Signup";
import Login from "./pages/app/LoginSignup/Login";
import VerifyNewAccount from "./pages/app/LoginSignup/VerifyNewAccount";
import VerifyAccount from "./pages/app/LoginSignup/VerifyAccount";
import ChangePassword from "./pages/app/LoginSignup/ChangePassword";
import ForgotPassword from "./pages/app/LoginSignup/ForgotPassword";
import Home from "./pages/app/Home";
{
  /* Advisory */
}
import Advisory from "./pages/app/Advisory/Advisory";
import RegisterFarm from "./pages/app/Advisory/RegisterFarm";
import Community from "./pages/app/Advisory/Community";
import Messages from "./pages/app/Advisory/Messages";
import ConnectionsProfile from "./pages/app/Advisory/ConnectionsProfile";
import Farms from "./pages/app/Advisory/Farms";
import Schedule from "./pages/app/Advisory/Schedule";
import BookConsultation from "./pages/app/Advisory/BookConsultation";
import PlotAdvisory from "./pages/app/Advisory/PlotAdvisory";
import AdvisoryPlan from "./pages/app/Advisory/AdvisoryPlan";
import Payment from "./pages/app/Advisory/Payment";
import QRCode from "./pages/app/Advisory/QRCode";
import QRinfo from "./pages/app/Advisory/QRinfo";
import ConsultationDate from "./pages/app/ConsultationDate";
import AdvisoryReview from "./pages/app/Advisory/AdvisoryReview";
import Successful from "./pages/app/Advisory/Successful";
{
  /*CropSchedule */
}
import PaymentValidation from "./pages/app/Advisory/PaymentValidation";
import CropSchedule from "./pages/app/CropSchedule/CropSchedule";
import MYFarms from "./pages/app/CropSchedule/MyPlots";
import Plot from "./pages/app/CropSchedule/Plot";
import PlotSchedule from "./pages/app/CropSchedule/PlotSchedule";
import Irrigation from "./pages/app/CropSchedule/Irrigation";
import TermsOfService from "./pages/app/CropSchedule/TermsOfService";
import Notifications from "./pages/app/CropSchedule/Notifications";
import CommunityProfile from "./pages/app/CropSchedule/CommunityProfile";
import CommunityProfileBasic from "./pages/app/CropSchedule/CommunityProfileBasic";
import UserSubscriptions from "./pages/app/CropSchedule/UserSubscriptions";
import CreatePost from "./pages/app/CropSchedule/CreatePost";
import ManageNetwork from "./pages/app/CropSchedule/ManageNetwork";
{
  /*Rewards*/
}
import Rewards from "./pages/app/Rewards/Rewards";
import Badges from "./pages/app/Rewards/Badges";
import ClaimedRewards from "./pages/app/Rewards/ClaimedRewards";
import RewardDetails from "./pages/app/Rewards/RewardDetails";
{
  /* Ecommerse */
}
import ECommerse from "./pages/app/ECommerse/ECommerse";
import Categories from "./pages/app/ECommerse/Categories";
import CategoryItems from "./pages/app/ECommerse/CategoryItems";
import ItemDetails from "./pages/app/ECommerse/ItemDetails";
import Cart from "./pages/app/ECommerse/Cart";
import Checkout from "./pages/app/ECommerse/Checkout";
import OrderSuccess from "./pages/app/ECommerse/OrderSuccess";
import MyOrders from "./pages/app/ECommerse/MyOrders";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "./redux/auth/selectors";
export const URL_PREFIX = "app";
const App: React.FC = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const path = window.location.pathname;
  useEffect(() => {
    const allowedRoutes: string[] = [
      `/${URL_PREFIX}/splashScreen`,
      `/${URL_PREFIX}/chooseLanguage`,
      `/${URL_PREFIX}/onboarding`,
      `/${URL_PREFIX}/chooseAccount`,
      `/${URL_PREFIX}/signup`,
      `/${URL_PREFIX}/signup/`,
      `/${URL_PREFIX}/verifyNewAccount`,
      `/${URL_PREFIX}/login`,
      `/${URL_PREFIX}/verifyAccount`,
      `/${URL_PREFIX}/changePassword`,
      `/${URL_PREFIX}/forgotPassword`,
    ];
    if (!user && !allowedRoutes.includes(path)) {
      navigate("/app/login");
    }
  }, [user, path, navigate]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" />} />
      <Route path={`/${URL_PREFIX}/`} Component={Home} />
      <Route path={`/${URL_PREFIX}/splashScreen`} Component={SplashScreen} />

      {/*Login */}
      <Route
        path={`/${URL_PREFIX}/chooseLanguage`}
        Component={ChooseLanguage}
      />
      <Route path={`/${URL_PREFIX}/onboarding`} Component={Onboarding} />
      <Route path={`/${URL_PREFIX}/chooseAccount`} Component={ChooseAccount} />
      <Route path={`/${URL_PREFIX}/signup`} Component={Signup} />
      <Route
        path={`/${URL_PREFIX}/verifyNewAccount`}
        Component={VerifyNewAccount}
      />
      <Route path={`/${URL_PREFIX}/login`} Component={Login} />
      <Route path={`/${URL_PREFIX}/verifyAccount`} Component={VerifyAccount} />
      <Route
        path={`/${URL_PREFIX}/changePassword`}
        Component={ChangePassword}
      />
      <Route
        path={`/${URL_PREFIX}/forgotPassword`}
        Component={ForgotPassword}
      />

      {/* Advisory */}
      <Route path={`/${URL_PREFIX}/advisory`} Component={Advisory} />
      <Route
        path={`/${URL_PREFIX}/advisory/registerFarm`}
        Component={RegisterFarm}
      />
      <Route path={`/${URL_PREFIX}/advisory/farms`} Component={Farms} />
      <Route path={`/${URL_PREFIX}/advisory/schedule`} Component={Schedule} />
      <Route
        path={`/${URL_PREFIX}/advisory/bookConsultation`}
        Component={BookConsultation}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/PlotAdvisory`}
        Component={PlotAdvisory}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/advisoryPlan`}
        Component={AdvisoryPlan}
      />
      <Route path={`/${URL_PREFIX}/advisory/payment`} Component={Payment} />
      <Route
        path={`/${URL_PREFIX}/advisory/payment/qrcode`}
        Component={QRCode}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/payment/qrinfo`}
        Component={QRinfo}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/payment/consultationdate`}
        Component={ConsultationDate}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/payment/advisoryreview`}
        Component={AdvisoryReview}
      />
      <Route
        path={`/${URL_PREFIX}/advisory/payment/successful`}
        Component={Successful}
      />

      {/* CropSchedule */}
      <Route path={`/${URL_PREFIX}/cropschedule`} Component={CropSchedule} />
      <Route path={`/${URL_PREFIX}/myplots`} Component={MYFarms} />
      <Route path={`/${URL_PREFIX}/plotdetails/:farmId`} Component={Plot} />
      <Route path={`/${URL_PREFIX}/plotSchedule`} Component={PlotSchedule} />
      <Route path={`/${URL_PREFIX}/irrigation`} Component={Irrigation} />

      {/* Community */}
      <Route path={`/${URL_PREFIX}/community`} Component={Community} />
      <Route path={`/${URL_PREFIX}/community/messages`} Component={Messages} />
      <Route
        path={`/${URL_PREFIX}/community/connectionProfile`}
        Component={ConnectionsProfile}
      />
      <Route
        path={`/${URL_PREFIX}/community/createPost`}
        Component={CreatePost}
      />
      <Route
        path={`/${URL_PREFIX}/community/terms`}
        Component={TermsOfService}
      />
      <Route
        path={`/${URL_PREFIX}/community/notifications`}
        Component={Notifications}
      />

      {/* User */}
      <Route
        path={`/${URL_PREFIX}/community/UserCommunityProfile`}
        Component={CommunityProfile}
      />
      <Route
        path={`/${URL_PREFIX}/community/CommunityProfile`}
        Component={CommunityProfileBasic}
      />
      <Route
        path={`/${URL_PREFIX}/community/UserSubscriptions`}
        Component={UserSubscriptions}
      />
      <Route
        path={`/${URL_PREFIX}/community/paymentValidation`}
        Component={PaymentValidation}
      />
      <Route
        path={`/${URL_PREFIX}/community/managenetwork`}
        Component={ManageNetwork}
      />

      {/* Rewards  */}
      <Route path={`/${URL_PREFIX}/user/rewards`} Component={Rewards} />
      <Route path={`/${URL_PREFIX}/user/Badges`} Component={Badges} />
      <Route
        path={`/${URL_PREFIX}/user/ClaimedRewards`}
        Component={ClaimedRewards}
      />
      <Route
        path={`/${URL_PREFIX}/user/RewardDetails`}
        Component={RewardDetails}
      />

      {/*E commerse */}
      <Route path={`/${URL_PREFIX}/ECommerse`} Component={ECommerse} />
      <Route
        path={`/${URL_PREFIX}/ECommerse/Categories`}
        Component={Categories}
      />
      <Route
        path={`/${URL_PREFIX}/ECommerse/CategoryItems`}
        Component={CategoryItems}
      />
      <Route
        path={`/${URL_PREFIX}/ECommerse/itemdetails`}
        Component={ItemDetails}
      />
      <Route path={`/${URL_PREFIX}/ECommerse/Cart`} Component={Cart} />
      <Route path={`/${URL_PREFIX}/ECommerse/Checkout`} Component={Checkout} />
      <Route
        path={`/${URL_PREFIX}/ECommerse/OrderSuccess`}
        Component={OrderSuccess}
      />
      <Route path={`/${URL_PREFIX}/ECommerse/MyOrders`} Component={MyOrders} />
    </Routes>
  );
};

export default App;
