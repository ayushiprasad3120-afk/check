/**
 * Toggleable site-wide UX behaviors. Kept separate from brand/campaign
 * config since these are structural UX choices, not identity or tracking
 * data.
 */
export const features = {
  /** "bar" renders the persistent mobile Sticky Call Bar; "button" renders
   * the Floating Call Button instead. Avoid enabling both — redundant call
   * CTAs compete with each other and clutter the mobile viewport. */
  mobileCallCta: "bar" as "bar" | "button",
};
