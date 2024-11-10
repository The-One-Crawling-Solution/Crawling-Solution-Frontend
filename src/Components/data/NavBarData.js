const navConfig = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  {
    label: "Services",
    dropdown: [
      { label: "Services", path: "/services" },
      { label: "Real Estate Data Scraping", path: "/realestate" },
      { label: "E-Commerce and Retail Scraping", path: "/ecommerce" },
      { label: "Healthcare Scraping", path: "/healthcare" },
      { label: "Food Scraping", path: "/food" },
      { label: "Entertainment Scraping", path: "/entertainment" },
      { label: "Education Scraping", path: "/education" },
      { label: "Travel Scraping", path: "/travel" },
      { label: "Sports Scraping", path: "/sport" },
      { label: "Grocery Site Scraping", path: "/grocery" },
      { label: "Social Media Scraping", path: "/socialmedia" },
      { label: "Jobs Site Scraping", path: "/jobs" },
      { label: "OTT Scraping", path: "/engineering" },
      { label: "Taxi Booking Scraping", path: "/taxibook" },
    ],
  },
  {
    label: "Blog",
    path: "/blogs",
  },
  // {
  //   label: "Blog",
  //   dropdown: [
  //     { label: "Blog", path: "/blog" },
  //     { label: "Blog Grid", path: "/blogs" },
  //     { label: "Blog Single", path: "/blog-single" },
  //   ],
  // },
  { label: "Contact", path: "/contact" },
];

export default navConfig;
