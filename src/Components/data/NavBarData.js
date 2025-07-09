const navConfig = [
  { label: "Home", path: "/" },
  // { label: "Portfolio", path: "/portfolio" },
  {
    label: "Services",
    dropdown: [
      {
        label: "Enterprise - Scale WebCrawling",
        path: "/website-data-scraping-services",
      },
      {
        label: "Mobile App Scraping",
        path: "/mobile-app-data-scraping-services",
      },
      { label: "Web Scraping APIs", path: "/web-scarping-api-services" },
    ],
  },
  {
    label: "Industry",
    dropdown: [
      { label: "Real Estate Scraping", path: "/real-estate-data-scraping" },
      { label: "E-Commerce  Scraping", path: "/ecommerce-data-scraping" },
      { label: "Healthcare Scraping", path: "/healthcare-data-scraping" },
      {
        label: "Food & Grocery Delivery Scraping",
        path: "/web-scraping-for-food-and-grocery-delivery-data",
      },
      {
        label: "Entertainment & OTT Platform Scraping",
        path: "/scrape-ott-streaming-and-entertainment-media-platform-data",
      },
      { label: "Education Scraping", path: "/education-app-data-scraping" },
      { label: "Travel Scraping", path: "/travel-websites-and-apps-scraping" },
      { label: "Sports Scraping", path: "/sports-data-scraping" },
      // { label: "Grocery Site Scraping", path: "/grocery" },
      { label: "Social Media Scraping", path: "/social-media-scraping" },
      { label: "Jobs Site Scraping", path: "/recruitment-data-scraping" },
      // { label: "OTT Scraping", path: "/engineering" },
      { label: "Taxi Booking Scraping", path: "/taxi-booking-data-scraping" },
      { label: "All Industries", path: "/all-services" },
    ],
  },

  {
    label: "Blog",
    path: "/blog-grid",
    // dropdown: [
    //   { label: "Blog", path: "/blog" },
    //   { label: "Blog Grid", path: "/blog-grid" },
    //   { label: "Blog Single", path: "/blog-single" },
    // ],
  },
  { label: "About", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

export default navConfig;
