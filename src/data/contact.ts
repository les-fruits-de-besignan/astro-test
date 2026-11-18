// Single source of truth for the farm's direct-contact details.
// The phone number needs two shapes: `phone` is the spaced international form
// we show on screen (same in both locales — visitors reach the farm from
// abroad), `phoneHref` is the E.164 form a handset can actually dial.
// E.164 — what a handset dials and what schema.org expects for `telephone`.
const phoneE164 = "+33674909671";

export const farmContact = {
  email: "gaecduvieuxchateau@gmail.com",
  phone: "+33 6 74 90 96 71",
  phoneE164,
  phoneHref: `tel:${phoneE164}`,
  // Machine-readable hours for the structured data. The customer-facing wording
  // lives in data/markets.ts ("À la ferme") — keep the two in step.
  opens: "08:00",
  closes: "19:00",
  // The farm's Google Business Profile. Listed in the structured data so Google
  // ties the site and the Maps listing to the same business; the coordinates are
  // the listing's pin, so both agree on where the farm is.
  googleMapsUrl: "https://maps.app.goo.gl/gyigh8aNpba6z2bc9",
  latitude: 44.3221,
  longitude: 5.325,
} as const;
