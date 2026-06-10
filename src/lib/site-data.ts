// Central brand + content data for Chaat Street.
// Swap [BRAND NAME], [PHONE], [ADDRESS] values here to rebrand instantly.

import chanaChaat from "@/assets/menu/chana-chaat.jpg";
import fruitChaat from "@/assets/menu/fruit-chaat.jpg";
import samosaImg from "@/assets/menu/samosa.jpg";
import pakoraImg from "@/assets/menu/pakora.jpg";
import shamiKabab from "@/assets/menu/shami-kabab.jpg";
import chapliKabab from "@/assets/menu/chapli-kabab.jpg";
import golGappay from "@/assets/menu/gol-gappay.jpg";
import seekhKabab from "@/assets/menu/seekh-kabab.jpg";

export const BRAND = {
  name: "Chaat Street",
  phone: "+44 7700 900123",
  phoneHref: "tel:+447700900123",
  whatsapp: "https://wa.me/447700900123",
  instagram: "https://instagram.com/chaatstreet",
  facebook: "https://facebook.com/chaatstreet",
  address: "42 Curry Mile, Rusholme, Manchester, M14 5TQ, UK",
  hours: "Mon–Sun · 12:00pm – 10:00pm",
  orderUrl: "#contact",
};

const img = (id: string, w = 900, q = 68) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  hero: img("photo-1606491956689-2ea866880c84", 1500),
  about: img("photo-1601050690597-df0568f70950", 900, 82),
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export const MENU: MenuItem[] = [
  {
    name: "Chana Chaat",
    description: "Spiced chickpeas tossed with onion, tomato, tangy tamarind & fresh coriander.",
    price: "£4.50",
    image: img("photo-1606471191009-63994c53433b", 500),
    tag: "Bestseller",
  },
  {
    name: "Fruit Chaat",
    description: "Colourful seasonal fruit with chaat masala, lime & a sweet-spicy kick.",
    price: "£4.00",
    image: img("photo-1626132647523-66f5bf380027", 500),
    tag: "Vegan",
  },
  {
    name: "Samosa",
    description: "Golden, crispy pastry parcels filled with spiced potato & peas. Made daily.",
    price: "£1.50",
    image: img("photo-1601050690597-df0568f70950", 500),
    tag: "Classic",
  },
  {
    name: "Pakora",
    description: "Crunchy onion & vegetable fritters in seasoned gram-flour batter.",
    price: "£3.50",
    image: img("photo-1596797038530-2c107229654b", 500),
    tag: "Halal",
  },
  {
    name: "Shami Kabab",
    description: "Soft, melt-in-the-mouth minced beef kababs blended with lentils & aromatic spices.",
    price: "£2.50",
    image: img("photo-1633945274405-b6c8069047b0", 500),
    tag: "Halal",
  },
  {
    name: "Chapli Kabab",
    description: "Flat, spicy Peshawari-style minced beef kababs with tomato, chilli & coriander.",
    price: "£3.75",
    image: img("photo-1529042410759-befb1204b468", 500),
    tag: "Spicy",
  },
  {
    name: "Gol Gappay",
    description: "Crispy hollow puris filled with spiced potato, chickpeas & tangy tamarind water.",
    price: "£4.25",
    image: img("photo-1601050690597-df0568f70950", 500),
    tag: "Vegan",
  },
  {
    name: "Seekh Kabab",
    description: "Char-grilled minced beef skewers, smoky and packed with fresh herbs & spice.",
    price: "£3.95",
    image: img("photo-1633237308525-cd587cf71926", 500),
    tag: "Halal",
  },
];

export const GALLERY: string[] = [
  img("photo-1585937421612-70a008356fbe", 600),
  img("photo-1631452180519-c014fe946bc7", 600),
  img("photo-1604908176997-125f25cc6f3d", 600),
  img("photo-1542367592-8849eb950fd8", 600),
  img("photo-1601050690117-94f5f6fa8bd7", 600),
  img("photo-1606491956689-2ea866880c84", 600),
  img("photo-1567188040759-fb8a883dc6d8", 600),
  img("photo-1601050690597-df0568f70950", 600),
];

export type Review = {
  name: string;
  rating: number;
  quote: string;
  location: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Ayesha K.",
    rating: 5,
    location: "Manchester",
    quote:
      "The chana chaat tastes exactly like home. Fresh, perfectly spiced and the portions are so generous. My new weekend ritual!",
  },
  {
    name: "Daniel M.",
    rating: 5,
    location: "Salford",
    quote:
      "Crispiest samosas in the city — golden and never greasy. Delivery was fast and everything arrived hot. Absolute 10/10.",
  },
  {
    name: "Priya S.",
    rating: 5,
    location: "Stockport",
    quote:
      "Authentic flavours done right. The fruit chaat is unreal and you can taste how fresh everything is. Highly recommend!",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const STEPS = [
  { step: "01", title: "Pick Your Chaat", desc: "Browse the menu and choose your favourite fresh street-food dishes." },
  { step: "02", title: "Place Your Order", desc: "Order online or call us — we start cooking the moment you confirm." },
  { step: "03", title: "Enjoy It Hot", desc: "Fast delivery or quick collection, always fresh and piping hot." },
];

export const OFFERS = [
  { title: "Family Chaat Box", desc: "A generous mix of all four favourites — perfect to share.", price: "£14.99", badge: "Save 20%" },
  { title: "Lunch Combo", desc: "Any chaat + 2 samosas + a soft drink, weekdays 12–3pm.", price: "£7.50", badge: "Weekdays" },
  { title: "Free Delivery", desc: "On all orders over £20 within 3 miles. No code needed.", price: "£0", badge: "Over £20" },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  { q: "Is all your food halal?", a: "Yes — 100% of our ingredients are certified halal, and we prepare everything in a dedicated halal kitchen." },
  { q: "Do you offer vegetarian and vegan options?", a: "Absolutely. Our fruit chaat and chana chaat are vegan-friendly, and most of our menu is vegetarian." },
  { q: "What areas do you deliver to?", a: "We deliver across Greater Manchester. Free delivery on orders over £20 within a 3-mile radius." },
  { q: "How fresh is the food?", a: "Everything is prepped fresh every single morning. We never freeze our chaat and cook in small batches." },
  { q: "Can I order for an event or party?", a: "Yes! We cater for parties and events of all sizes. Call us to discuss a custom platter order." },
];

