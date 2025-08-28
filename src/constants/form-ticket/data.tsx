export const categories: { [key: string]: string[] } = {
  Work: ["Report", "Meeting", "Task"],
  Personal: ["Family", "Friend", "Event"],
  Finance: ["Invoice", "Payment", "Budget"],
};

export const types: { [key: string]: string[] } = {
  Report: ["Weekly", "Monthly", "Annual"],
  Meeting: ["Online", "In-person"],
  Task: ["Urgent", "Routine"],
  Family: ["Birthday", "Reunion"],
  Friend: ["Catch-up", "Party"],
  Event: ["Conference", "Webinar"],
  Invoice: ["Pending", "Paid"],
  Payment: ["Credit", "Debit"],
  Budget: ["Planning", "Review"],
};

export const items = {
  Weekly: ["Summary", "Details"],
  Monthly: ["Summary", "Details"],
  Annual: ["Summary", "Details"],
  Online: ["Zoom", "Teams"],
  "In-person": ["Office", "Cafe"],
  Urgent: ["ASAP", "Today"],
  Routine: ["Tomorrow", "Next week"],
  Birthday: ["Gift", "Card"],
  Reunion: ["Venue", "Date"],
  "Catch-up": ["Call", "Meet"],
  Party: ["Invite", "Location"],
  Conference: ["Ticket", "Schedule"],
  Webinar: ["Link", "Time"],
  Pending: ["Amount", "Due date"],
  Paid: ["Receipt", "Confirmation"],
  Credit: ["Card", "Bank"],
  Debit: ["Card", "Bank"],
  Planning: ["Goal", "Steps"],
  Review: ["Result", "Feedback"],
};

export const impacts = ["Low", "Medium", "High"];
export const urgencies = ["Normal", "Urgent", "Critical"];
