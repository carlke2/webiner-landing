import LogoBar from "../components/LogoBar";
import WebinarHero from "../components/WebinarHero";
import RegistrationForm from "../components/RegistrationForm";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="pageShell">
      <div className="frame">
        <div className="backgroundGlow"></div>
        <div className="dots dotsLeft"></div>
        <div className="dots dotsRight"></div>
        <div className="grain"></div>

        <div className="wrap">
          <LogoBar />
          <WebinarHero />

          <div className="stack">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}