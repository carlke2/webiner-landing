export default function WebinarHero() {
  return (
    <div className="hero">
      <h1>AI Networking with Aruba</h1>
      <div className="subtitle">The Future of Campus Access</div>

      <p className="desc">
        Join Millenium and HPE operated by Selectium to learn how AI-native
        networking is transforming campus networks.
      </p>

      <div className="metaRow">
        <span className="pill">
          <svg className="icon" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Thursday, 26th March
        </span>

        <span className="pill">
          <svg className="icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8v4l3 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          10:00 AM (GMT+3)
        </span>

        <span className="pill">
          <svg className="icon" viewBox="0 0 24 24" fill="none">
            <path d="M16 8l4-2v12l-4-2V8Z" stroke="currentColor" strokeWidth="2" />
            <path d="M4 7h12v10H4V7Z" stroke="currentColor" strokeWidth="2" />
          </svg>
          Microsoft Teams Webinar
        </span>
      </div>
    </div>
  );
}