const { Resend } = require("resend");
const { buildIcs } = require("../utils/buildIcs");

const resend = new Resend(process.env.RESEND_API_KEY);

function buildConfirmationEmailHtml(registration) {
  const webinarTitle =
    process.env.WEBINAR_TITLE || "AI Networking with Aruba — The Future of Campus Access";
  const webinarDate = process.env.WEBINAR_DATE || "Thursday, 26th March 2026";
  const webinarTime = process.env.WEBINAR_TIME || "10:00 AM (GMT+3)";
  const webinarTeamsUrl = process.env.WEBINAR_TEAMS_URL || "";
  const webinarSpeaker =
    process.env.WEBINAR_SPEAKER ||
    "Joseph Njogu, Pre-sales Manager — HPE operated by Selectium";
  const webinarPlatform = "Microsoft Teams Webinar";

  return `
    <div style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
        <div style="background:#07142f;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
          <div style="padding:32px 28px;background:linear-gradient(180deg,#050815 0%,#07142f 100%);color:#F5F7FF;">
            <h1 style="margin:0 0 8px;font-size:28px;line-height:1.15;">Registration Confirmed</h1>
            <p style="margin:0;color:rgba(245,247,255,.78);font-size:15px;line-height:1.6;">
              Hello ${registration.fullName}, your seat has been reserved successfully.
            </p>
          </div>

          <div style="padding:28px;background:#ffffff;color:#0f172a;">
            <p style="margin:0 0 18px;font-size:15px;line-height:1.6;">
              Thank you for registering for our webinar. Here are your registration details and event information.
            </p>

            <div style="margin-bottom:22px;">
              <h2 style="margin:0 0 10px;font-size:18px;color:#111827;">Your Registration Details</h2>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:160px;">Full Name</td>
                  <td style="padding:8px 0;color:#111827;">${registration.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Email</td>
                  <td style="padding:8px 0;color:#111827;">${registration.email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Phone</td>
                  <td style="padding:8px 0;color:#111827;">${registration.phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Organisation</td>
                  <td style="padding:8px 0;color:#111827;">${registration.organisation}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Role</td>
                  <td style="padding:8px 0;color:#111827;">${registration.role}</td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom:24px;">
              <h2 style="margin:0 0 10px;font-size:18px;color:#111827;">Webinar Details</h2>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:160px;">Title</td>
                  <td style="padding:8px 0;color:#111827;">${webinarTitle}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Date</td>
                  <td style="padding:8px 0;color:#111827;">${webinarDate}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Time</td>
                  <td style="padding:8px 0;color:#111827;">${webinarTime}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Platform</td>
                  <td style="padding:8px 0;color:#111827;">${webinarPlatform}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Speaker</td>
                  <td style="padding:8px 0;color:#111827;">${webinarSpeaker}</td>
                </tr>
              </table>
            </div>

            <div style="margin:24px 0;">
              <a
                href="${webinarTeamsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                style="display:inline-block;background:#c60f2b;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:10px;font-weight:700;"
              >
                Join on Microsoft Teams
              </a>
            </div>

            <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#475569;">
              We have attached a calendar invite to this email so you can add the event to Google Calendar, Outlook, or Apple Calendar.
            </p>

            <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#475569;">
              We look forward to having you with us.
            </p>

            <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#111827;">
              Best regards,<br />
              Millennium Team
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function sendConfirmationEmail(registration) {
  const webinarTitle =
    process.env.WEBINAR_TITLE || "AI Networking with Aruba — The Future of Campus Access";
  const webinarDate = process.env.WEBINAR_DATE || "Thursday, 26th March 2026";
  const webinarTime = process.env.WEBINAR_TIME || "10:00 AM (GMT+3)";
  const webinarTeamsUrl = process.env.WEBINAR_TEAMS_URL || "";
  const webinarSpeaker =
    process.env.WEBINAR_SPEAKER ||
    "Joseph Njogu, Pre-sales Manager — HPE operated by Selectium";
  const webinarStartLocal = process.env.WEBINAR_START_LOCAL || "2026-03-26T10:00:00";
  const webinarDurationMinutes = Number(process.env.WEBINAR_DURATION_MINUTES || 90);

  const icsContent = buildIcs({
    title: webinarTitle,
    description:
      `Join Millennium and HPE operated by Selectium for an introduction to Aruba AI Networking.\n` +
      `Speaker: ${webinarSpeaker}\n` +
      `Date: ${webinarDate}\n` +
      `Time: ${webinarTime}\n\n` +
      `Join on Teams: ${webinarTeamsUrl}`,
    location: `Microsoft Teams: ${webinarTeamsUrl}`,
    url: webinarTeamsUrl,
    startLocal: webinarStartLocal,
    durationMinutes: webinarDurationMinutes,
  });

  return resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: registration.email,
    subject: `Your Webinar Registration — ${webinarTitle}`,
    html: buildConfirmationEmailHtml(registration),
    attachments: [
      {
        filename: "webinar-invite.ics",
        content: Buffer.from(icsContent).toString("base64"),
      },
    ],
  });
}

async function sendInternalNotification(registration) {
  if (!process.env.INTERNAL_NOTIFY_EMAIL) return null;

  const webinarTitle =
    process.env.WEBINAR_TITLE || "AI Networking with Aruba — The Future of Campus Access";

  return resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: process.env.INTERNAL_NOTIFY_EMAIL,
    subject: `New Registration — ${webinarTitle}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;padding:20px;">
        <h2 style="margin-top:0;">New Webinar Registration</h2>
        <p><strong>Full Name:</strong> ${registration.fullName}</p>
        <p><strong>Email:</strong> ${registration.email}</p>
        <p><strong>Phone:</strong> ${registration.phone}</p>
        <p><strong>Organisation:</strong> ${registration.organisation}</p>
        <p><strong>Role:</strong> ${registration.role}</p>
      </div>
    `,
  });
}

module.exports = {
  sendConfirmationEmail,
  sendInternalNotification,
};