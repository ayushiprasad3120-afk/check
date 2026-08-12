export interface DayHours {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  open: string | null; // "08:00" 24hr, null = closed
  close: string | null;
}

export const businessHours: { timezone: string; hours: DayHours[] } = {
  timezone: "America/New_York",
  hours: [
    { day: "Mon", open: "08:00", close: "20:00" },
    { day: "Tue", open: "08:00", close: "20:00" },
    { day: "Wed", open: "08:00", close: "20:00" },
    { day: "Thu", open: "08:00", close: "20:00" },
    { day: "Fri", open: "08:00", close: "20:00" },
    { day: "Sat", open: "09:00", close: "17:00" },
    { day: "Sun", open: null, close: null },
  ],
};
