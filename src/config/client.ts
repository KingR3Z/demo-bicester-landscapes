export const client = {
  // Business Details
  name: "Bicester Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bicester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01869 351971",
  email: "",
  website: "",

  // Location
  address: "Bicester",
  city: "Bicester",
  county: "",
  postcode: "",
  basedIn: "Bicester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Chris Hurden", rating: 5, text: "I took a slightly different direction for my mid-life crisis purchase and bought a 6x4m roll of astroturf used on hockey pitches in the FIH league with the idea of rolling it out on the grass or patio to play with my kid. Sadly both the …  ", date: "3 months ago" },
    { name: "Hamish Torunski", rating: 5, text: "Highly recommend this small family firm. They did a great job of installing my artificial lawn, see photo. Their work ethics are excellent discussing the progress with me when required and the best thing was they cleared up each night before leaving,", date: "9 months ago" },
    { name: "David Bloomfield", rating: 5, text: "We had Ariel, come to do our lawn in January. I’ve held off giving an immediate review because sometimes a quick review isn’t always the sign of a good job. 5 months down the line I’m still as happy as I was when the job was completed. …  ", date: "9 months ago" },
    { name: "Acrylophy Art", rating: 5, text: "I am not quite sure where to begin with this review…so I will say this...if you are hesitating to call the team and are perusing reviews to decide, then wait no longer and call them immediately. …  ", date: "7 months ago" },
    { name: "Angela Holloway", rating: 5, text: "Definitely recommend Ariel and his team they have just finished my artificial grass and patio area. They were very professional. Kept the site clean and tidy at all times. Nothing was too much for them. Thanks again Bicester Landscapes. ", date: "4 years ago" },
    { name: "Alex Acklam", rating: 5, text: "Ariel and the team did an amazing job installing some artificial grass for me. They were quick, tidy, and the results look great! From start to finish Ariel/Katey were always very responsive to any questions and very patient with finding a date that", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Bicester Landscapes | Landscaper in Bicester",
    description: "Professional landscaper in Bicester. 5.0-star rated on Google. Call for a free quote.",
  },
};
