import { Link, useLocation, Navigate } from "react-router-dom";
import LogoBar from "../components/LogoBar";
import SuccessActions from "../components/SuccessActions";
import "../styles/thankyou.css";

export default function ThankYou() {
  const location = useLocation();
  const attendee = location.state?.attendee;

  if (!attendee) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pageShell">
      <div className="frame">
        <div className="backgroundGlow"></div>
        <div className="dots dotsLeft"></div>
        <div className="dots dotsRight"></div>
        <div className="grain"></div>

        <div className="wrap">
          <LogoBar />

          <div className="thankHero">
            <h1>Thank You</h1>
            <div className="subtitle">Your registration has been received</div>
          </div>

          <div className="thankYouMain">
            <SuccessActions />

            <div className="backLinkWrap">
              <Link to="/" className="backLink">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}