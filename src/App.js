import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HelmetWrapper from "./Components/seo/HelmetWrapper";
import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import FullScreenLoader from "./Components/common/FullScreenLoader";

// Lazy-loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Jobs = lazy(() => import("./Components/service/Jobs"));
const Engineering = lazy(() => import("./Components/service/Engineering"));
const Taxibook = lazy(() => import("./Components/service/Taxibook"));
const RealEstate = lazy(() => import("./Components/service/Realestate"));
const Ecommerce = lazy(() => import("./Components/service/Ecommerce"));
const Healthcare = lazy(() => import("./Components/service/Healthcare"));
const Food = lazy(() => import("./Components/service/Food"));
const Entertainment = lazy(() => import("./Components/service/Entertainment"));
const Education = lazy(() => import("./Components/service/Education"));
const Travel = lazy(() => import("./Components/service/Travel"));
const Sport = lazy(() => import("./Components/service/Sport"));
const Grocery = lazy(() => import("./Components/service/Grocery"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact"));
const Socialmedia = lazy(() => import("./Components/service/Socialmedia"));
const Faqs = lazy(() => import("./Pages/Faqs"));
const WebscrapingAPI = lazy(() =>
  import("./Components/scraping/WebscrapingAPI")
);
const Webscraping = lazy(() => import("./Components/scraping/Webscraping"));
const Appscraping = lazy(() => import("./Components/scraping/Appscraping"));
const BlogSinglePost = lazy(() => import("./Components/blog/BlogSinglePost"));
const BlogGrid = lazy(() => import("./Components/blog/BlogGrid"));
const Blog = lazy(() => import("./Pages/Blog"));
const TermConditions = lazy(() => import("./Components/common/TermConditions"));
const PrivacyPolicy = lazy(() => import("./Components/common/PrivacyPolicy"));
const Team = lazy(() => import("./Components/common/Team"));

function App() {
  return (
    <div className="App">
      {/* For react-seo  */}
      <HelmetWrapper />
      <Header />
      <Suspense fallback={<FullScreenLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/webscraping" element={<Webscraping />} />
          <Route path="/appscraping" element={<Appscraping />} />
          <Route path="/webscarpingapi" element={<WebscrapingAPI />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* <--*  Services  *--> */}
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/food" element={<Food />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/education" element={<Education />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/socialmedia" element={<Socialmedia />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/taxibook" element={<Taxibook />} />
          {/* Blog post  */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSinglePost />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          {/* /term-conditions */}
          <Route path="/term-conditions" element={<TermConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
