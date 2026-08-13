// Single source of truth for the farm's direct-contact details.
// The phone number needs two shapes: `phone` is the spaced international form
// we show on screen (same in both locales — visitors reach the farm from
// abroad), `phoneHref` is the E.164 form a handset can actually dial.
export const farmContact = {
  phone: "+33 6 74 90 96 71",
  phoneHref: "tel:+33674909671",
} as const;
