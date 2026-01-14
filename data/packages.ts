export type TourPackage = {
  slug: string;
  title: string;
  duration: string;
  location: string;
  oldPrice: string;
  price: string;
  saveBadge?: string;
  image: string;
  highlights: string[];
};

export const PACKAGES: TourPackage[] = [
  {
    slug: "thailand",
    title: "Thailand",
    duration: "5 Days / 4 Nights",
    location: "Thailand",
    saveBadge: "Save ₹4000",
    oldPrice: "₹20,999",
    price: "₹16,999",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Pattaya + Bangkok", "Coral Island Tour", "Bangkok City Tour"],
  },
  {
    slug: "manali",
    title: "Manali Adventure",
    duration: "5 Days / 4 Nights",
    location: "Manali",
    saveBadge: "Save ₹2000",
    oldPrice: "₹11,999",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Solang Valley", "Atal Tunnel", "Snow Activities"],
  },
  {
    slug: "kedarnath",
    title: "Kedarnath Yatra",
    duration: "3 Days / 2 Nights",
    location: "Kedarnath",
    saveBadge: "Save ₹5000",
    oldPrice: "₹24,999",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Temple Darshan", "Guided Trek", "Helicopter Option"],
  },
  {
    slug: "dubai",
    title: "Dubai Luxury",
    duration: "5 Days / 4 Nights",
    location: "Dubai",
    saveBadge: "Save ₹40000",
    oldPrice: "₹99,999",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    highlights: ["Burj Khalifa", "Desert Safari", "Marina Cruise"],
  },
];
