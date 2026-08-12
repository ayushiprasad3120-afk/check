import { businessHours as globalHours } from "@/config/business-hours.config";
import type { CampaignConfig, CampaignHours, HolidayOverride } from "@/types/campaign";

export interface HoursStatus {
  isOpen: boolean;
  isHoliday: boolean;
  holidayLabel?: string;
  label: string;
}

function toISODate(d: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(d); // en-CA => YYYY-MM-DD
}

function todayKey(d: Date, timezone: string) {
  return d.toLocaleDateString("en-US", { weekday: "short", timeZone: timezone }) as CampaignHours["day"];
}

function currentTimeStr(d: Date, timezone: string) {
  return d.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", timeZone: timezone });
}

/**
 * Resolves open/closed status, honoring (in order of precedence):
 * campaign holiday schedule -> campaign hours override -> global holiday
 * schedule (none defined globally) -> global business hours.
 * Supports weekends (via the Sat/Sun entries already in the weekly
 * schedule) and "outside business hours" alternate-CTA logic — callers
 * use `isOpen` to decide whether to show the primary CTA or the
 * campaign's `cta.afterHoursLabel`.
 */
export function getHoursStatus(campaign?: CampaignConfig | null, now: Date = new Date()): HoursStatus {
  const timezone = globalHours.timezone;
  const weeklySchedule: CampaignHours[] = campaign?.hoursOverride ?? globalHours.hours;
  const holidaySchedule: HolidayOverride[] = campaign?.holidaySchedule ?? [];

  const isoDate = toISODate(now, timezone);
  const holiday = holidaySchedule.find((h) => h.date === isoDate);

  if (holiday) {
    if (!holiday.open || !holiday.close) {
      return { isOpen: false, isHoliday: true, holidayLabel: holiday.label, label: `Closed for ${holiday.label}` };
    }
    const time = currentTimeStr(now, timezone);
    const open = time >= holiday.open && time <= holiday.close;
    return {
      isOpen: open,
      isHoliday: true,
      holidayLabel: holiday.label,
      label: open ? `Open now — special ${holiday.label} hours` : `Closed for ${holiday.label}`,
    };
  }

  const day = todayKey(now, timezone);
  const today = weeklySchedule.find((h) => h.day === day);

  if (!today?.open || !today?.close) {
    return { isOpen: false, isHoliday: false, label: "Closed today" };
  }

  const time = currentTimeStr(now, timezone);
  const open = time >= today.open && time <= today.close;

  return {
    isOpen: open,
    isHoliday: false,
    label: open ? "Licensed agents available now" : "Currently closed",
  };
}
