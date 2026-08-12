import { CALL_NUMBER, CALL_NUMBER_TEL, ENABLE_CALL_CONFIRMATION } from "../config/campaign";

/** Detects touch/mobile-class devices where tel: links can place a call directly. */
export function isLikelyMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

/**
 * Shared click handler for all call-to-action buttons. On mobile it lets the
 * default tel: navigation proceed. On desktop, if ENABLE_CALL_CONFIRMATION is
 * on, it shows a lightweight confirmation instead of doing nothing.
 */
export function handleCallClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (!isLikelyMobile() && ENABLE_CALL_CONFIRMATION) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    window.alert(`Call ${CALL_NUMBER} from your phone to speak with an insurance specialist.`);
  }
}

export { CALL_NUMBER, CALL_NUMBER_TEL };
