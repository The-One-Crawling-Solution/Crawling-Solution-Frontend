// src/App.js
import React, { Suspense, lazy, useEffect, useRef, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import FullScreenLoader from "./Components/common/FullScreenLoader";
import navConfig from "./Components/data/NavBarData";
import ReactGA from "react-ga4";

// Lazy-loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact"));
const Blog = lazy(() => import("./Pages/Blog"));
const Faqs = lazy(() => import("./Pages/Faqs"));
const BlogSinglePost = lazy(() => import("./Components/blog/BlogSinglePost"));
const BlogGrid = lazy(() => import("./Components/blog/BlogGrid"));
const RealEstate = lazy(() => import("./Components/service/Realestate"));
const Ecommerce = lazy(() => import("./Components/service/Ecommerce"));
const Healthcare = lazy(() => import("./Components/service/Healthcare"));
const Food = lazy(() => import("./Components/service/Food"));
const Entertainment = lazy(() => import("./Components/service/Entertainment"));
const Education = lazy(() => import("./Components/service/Education"));
const Travel = lazy(() => import("./Components/service/Travel"));
const Sport = lazy(() => import("./Components/service/Sport"));
// const Grocery = lazy(() => import("./Components/service/Grocery"));
const SocialMedia = lazy(() => import("./Components/service/Socialmedia"));
const Jobs = lazy(() => import("./Components/service/Jobs"));
const Engineering = lazy(() => import("./Components/service/Engineering"));
const Taxibook = lazy(() => import("./Components/service/Taxibook"));
const TermConditions = lazy(() => import("./Components/common/TermConditions"));
const PrivacyPolicy = lazy(() => import("./Components/common/PrivacyPolicy"));
const Team = lazy(() => import("./Components/common/Team"));
const WebScraping = lazy(() => import("./Components/scraping/Webscraping"));
const AppScraping = lazy(() => import("./Components/scraping/Appscraping"));
const ApiDataScarping = lazy(() =>
  import("./Components/scraping/WebscrapingAPI")
);
const NotFound = lazy(() => import("./Pages/NotFound"));

// Mapping route paths to their corresponding components
const pageComponentMapping = {
  "/": Home,
  "/about-us": About,
  "/all-services": Services,
  "/portfolio": Portfolio,
  "/contact": Contact,
  "/real-estate-data-scraping": RealEstate,
  "/ecommerce-data-scraping": Ecommerce,
  "/healthcare-data-scraping": Healthcare,
  "/web-scraping-for-food-and-grocery-delivery-data": Food,
  "/scrape-ott-streaming-and-entertainment-media-platform-data": Entertainment,
  "/education-app-data-scraping": Education,
  "/travel-websites-and-apps-scraping": Travel,
  "/sports-data-scraping": Sport,
  "/social-media-scraping": SocialMedia,
  "/recruitment-data-scraping": Jobs,
  "/taxi-booking-data-scraping": Taxibook,
  "/webscraping": WebScraping,
  "/appscraping": AppScraping,
  "/webscarpingapi": ApiDataScarping,
  "/blog": Blog,
  "/blog-single": BlogSinglePost,
  "/blog-grid": BlogGrid,
  "/faqs": Faqs,
  "/term-conditions": TermConditions,
  "/privacy-policy": PrivacyPolicy,
  "/team": Team,
  // "/grocery-data-scraping": Grocery,
  // "/engineering": Engineering,
};

function App() {
  const location = useLocation();
  const startTimeRef = useRef(Date.now());
  const previousPathRef = useRef(location.pathname);

  // Initialize GA once & send pageview on location change
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("G-TWLQ8238W6");
      window.GA_INITIALIZED = true;
    }

    // Calculate time spent on previous page
    const currentTime = Date.now();
    const timeSpentSeconds = Math.round(
      (currentTime - startTimeRef.current) / 1000
    );

    ReactGA.event({
      category: "Engagement",
      action: "Time Spent",
      label: previousPathRef.current,
      value: timeSpentSeconds,
    });

    ReactGA.send({ hitType: "pageview", page: location.pathname });

    previousPathRef.current = location.pathname;
    startTimeRef.current = currentTime;
  }, [location.pathname]);

  // Global Click Tracking
  useEffect(() => {
    const handleClick = (event) => {
      let element = event.target;
      while (element && element !== document.body) {
        const eventData = element.getAttribute("data-ga-event");
        if (eventData) {
          const [category, action, label] = eventData.split("|");
          if ([category, action, label].every(Boolean)) {
            ReactGA.event({
              category: category.trim(),
              action: action.trim(),
              label: label.trim(),
            });
          }
          break;
        }
        element = element.parentElement;
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Memoize nav paths
  const navPaths = useMemo(() => {
    let paths = [];
    navConfig.forEach(({ path, dropdown }) => {
      if (dropdown) {
        dropdown.forEach(({ path }) => paths.push(path));
      } else {
        paths.push(path);
      }
    });
    return paths;
  }, []);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          {/* Generate Routes from navConfig */}
          {navConfig.map(({ path, dropdown }) => {
            if (dropdown) {
              return dropdown.map(({ path: subPath }) => {
                const Component = pageComponentMapping[subPath];
                return (
                  <Route key={subPath} path={subPath} element={<Component />} />
                );
              });
            }

            const Component = pageComponentMapping[path];
            return <Route key={path} path={path} element={<Component />} />;
          })}

          {/* Generate Routes not present in navConfig */}
          {Object.entries(pageComponentMapping).map(([path, Component]) => {
            if (!navPaths.includes(path)) {
              return <Route key={path} path={path} element={<Component />} />;
            }
            return null;
          })}

          {/* Fallback Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
