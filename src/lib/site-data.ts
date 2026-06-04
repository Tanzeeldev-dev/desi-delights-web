// Central brand + content data for Chaat Street.
// Swap [BRAND NAME], [PHONE], [ADDRESS] values here to rebrand instantly.

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

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=68`;

export const IMAGES = {
  hero: img("photo-1606491956689-2ea866880c84", 1500),
  about: img("photo-1567188040759-fb8a883dc6d8", 760),
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
    image: img("photo-1606471191009-63994c53433b", 800),
    tag: "Bestseller",
  },
  {
    name: "Fruit Chaat",
    description: "Colourful seasonal fruit with chaat masala, lime & a sweet-spicy kick.",
    price: "£4.00",
    image: img("photo-1626132647523-66f5bf380027", 800),
    tag: "Vegan",
  },
  {
    name: "Samosa",
    description: "Golden, crispy pastry parcels filled with spiced potato & peas. Made daily.",
    price: "£1.50",
    image: img("photo-1601050690597-df0568f70950", 800),
    tag: "Classic",
  },
  {
    name: "Pakora",
    description: "Crunchy onion & vegetable fritters in seasoned gram-flour batter.",
    price: "£3.50",
    image: img("photo-1596797038530-2c107229654b", 800),
    tag: "Halal",
  },
];

export const GALLERY: string[] = [
  img("photo-1585937421612-70a008356fbe", 800),
  img("photo-1631452180519-c014fe946bc7", 800),
  img("photo-1604908176997-125f25cc6f3d", 800),
  img("photo-1542367592-8849eb950fd8", 800),
  img("photo-1601050690117-94f5f6fa8bd7", 800),
  img("photo-1606491956689-2ea866880c84", 800),
  img("photo-1567188040759-fb8a883dc6d8", 800),
  img("photo-1601050690597-df0568f70950", 800),
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
