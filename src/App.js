// src/App.js

import React, { Suspense, lazy, useEffect, useRef } from "react";
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
const Grocery = lazy(() => import("./Components/service/Grocery"));
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
const AdminLogin = lazy(() => import("./admin/Login"));
const AddBlogData = lazy(() => import("./admin/AddBlogData"));

// Mapping route paths to their corresponding components
const pageComponentMapping = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/portfolio": Portfolio,
  "/contact": Contact,
  "/realestate": RealEstate,
  "/ecommerce": Ecommerce,
  "/healthcare": Healthcare,
  "/food": Food,
  "/entertainment": Entertainment,
  "/education": Education,
  "/travel": Travel,
  "/sport": Sport,
  "/grocery": Grocery,
  "/socialmedia": SocialMedia,
  "/jobs": Jobs,
  "/engineering": Engineering,
  "/taxibook": Taxibook,
  "/webscraping": WebScraping,
  "/appscraping": AppScraping,
  "/webscarpingapi": ApiDataScarping,
  "/blog": Blog,
  "/blogs": BlogGrid,
  "/blogs/:id": BlogSinglePost,
  "/faqs": Faqs,
  "/term-conditions": TermConditions,
  "/privacy-policy": PrivacyPolicy,
  "/team": Team,
  "/login": AdminLogin,
  "/addblog": AddBlogData,
};

function App() {
  const location = useLocation();
  const startTimeRef = useRef(Date.now());

  console.log("env check", process.env.REACT_APP_ENVIRONMENT);

  // Initialize GA4
  useEffect(() => {
    ReactGA.initialize("G-TWLQ8238W6"); // Replace with your GA4 Measurement ID
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, []);

  // Track page views and time spent
  useEffect(() => {
    const previousPath = location.pathname;
    const previousStartTime = startTimeRef.current;
    const currentTime = Date.now();

    const timeSpentSeconds = Math.round(
      (currentTime - previousStartTime) / 1000
    );

    if (previousPath) {
      ReactGA.event({
        category: "Engagement",
        action: "Time Spent",
        label: previousPath,
        value: timeSpentSeconds,
      });
    }

    startTimeRef.current = currentTime;

    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  // Global Click Tracking
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;

      // Traverse up the DOM tree to find elements with 'data-ga-event' attribute
      let element = target;
      while (element && element !== document.body) {
        if (element.getAttribute("data-ga-event")) {
          const eventData = element.getAttribute("data-ga-event");
          const [category, action, label] = eventData.split("|"); // Format: category|action|label

          if (category && action && label) {
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

  // Helper function to flatten all paths from navConfig
  const getNavPaths = (config) => {
    let paths = [];
    config.forEach(({ path, dropdown }) => {
      if (dropdown) {
        dropdown.forEach((item) => paths.push(item.path));
      } else {
        paths.push(path);
      }
    });
    return paths;
  };

  const navPaths = getNavPaths(navConfig);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          {/* Generate Routes from navConfig */}
          {navConfig.map(({ path, label, dropdown }) => {
            if (dropdown) {
              return dropdown.map(({ path: subPath, label: subLabel }) => {
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
