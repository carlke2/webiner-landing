import milleniumLogo from "../assets/millenium-logo.png";
import hpeLogo from "../assets/hpe-logo.png";

export default function LogoBar() {
  return (
    <div className="top">
      <div className="logos-left">
        <a
          href="https://www.millenium.co.ke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo milleniumLogo"
            src={milleniumLogo}
            alt="Millenium"
          />
        </a>
      </div>

      <div className="logos-right">
        <a
          href="https://www.hpe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo hpeLogo"
            src={hpeLogo}
            alt="HPE operated by Selectium"
          />
        </a>
      </div>
    </div>
  );
}