import { getWebinarDetails } from "../utils/calendar";

export default function SuccessActions() {
  const webinar = getWebinarDetails();

  return (
    <div className="card thankYouCard">
      <div className="cardInner">
        <div className="successTitle">Registration Successful</div>

        <p className="thankYouMessage">
          Thank you for registering. We’ve reserved your place for the webinar
          and a confirmation email should reach you shortly.
        </p>

        <div className="thankYouDetails">
          <div>
            <strong>Event:</strong> {webinar.title}
          </div>

          <div>
            <strong>Date:</strong> {webinar.dateText}
          </div>

          <div>
            <strong>Time:</strong> {webinar.timeText}
          </div>

          <div>
            <strong>Platform:</strong> {webinar.platform}
          </div>

          <div>
            <strong>Speaker:</strong> {webinar.speaker}
          </div>
        </div>

        <div className="actions">
          <a
            className="action secondary"
            href={webinar.teamsJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Teams
          </a>
        </div>
      </div>
    </div>
  );
}