const WEBINAR = {
  title: "AI Networking with Aruba — The Future of Campus Access",
  dateText: "Thursday, 26th March 2026",
  timeText: "10:00 AM (GMT+3)",
  speaker: "Joseph Njogu, Pre-sales Manager — HPE operated by Selectium",
  platform: "Microsoft Teams Webinar",
  teamsJoinUrl:
    "https://events.teams.microsoft.com/event/3648e2e2-6a12-4e41-8484-366a3e4b5628@0751423e-522e-4c6a-8157-41b3a5c201a4",
  startLocal: "2026-03-26T10:00:00",
  durationMinutes: 90,
};

const pad = (n) => String(n).padStart(2, "0");

const toUTCStamp = (date) =>
  `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
    date.getUTCHours()
  )}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;

const escapeICS = (text) =>
  String(text || "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

export function downloadCalendarInvite() {
  const start = new Date(WEBINAR.startLocal);
  const end = new Date(start.getTime() + WEBINAR.durationMinutes * 60 * 1000);
  const now = new Date();

  const uid = `webinar-${now.getTime()}@millenium`;

  const description =
    `Join Millennium and HPE operated by Selectium for an introduction to Aruba AI Networking.\n` +
    `Speaker: ${WEBINAR.speaker}\n` +
    `Platform: ${WEBINAR.platform}\n\n` +
    `Join on Teams: ${WEBINAR.teamsJoinUrl}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Millenium Webinar Invite//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toUTCStamp(now)}`,
    `DTSTART:${toUTCStamp(start)}`,
    `DTEND:${toUTCStamp(end)}`,
    `SUMMARY:${escapeICS(WEBINAR.title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(`Microsoft Teams: ${WEBINAR.teamsJoinUrl}`)}`,
    `URL:${escapeICS(WEBINAR.teamsJoinUrl)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "webinar-invite.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

export function getWebinarDetails() {
  return WEBINAR;
}