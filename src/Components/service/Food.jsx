import React, { useRef, useEffect } from "react";
import "../../assets/css/grocery.css";

const FoodDeliveryPage = () => {
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const refs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: "fa-chart-line", title: "Real-time Price Tracking" },
    { icon: "fa-map-marker-alt", title: "Location-based Insights" },
    { icon: "fa-shopping-cart", title: "Product Availability" },
    { icon: "fa-star", title: "Review Analysis" },
    { icon: "fa-clock", title: "Delivery Time Monitoring" },
    { icon: "fa-tags", title: "Offer & Deal Tracking" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understanding Your Requirements",
      description:
        "We analyze your specific needs and identify the platforms you want to track - whether it's Zomato, Swiggy, Uber Eats, or grocery platforms like Blinkit and BigBasket.",
    },
    {
      number: "02",
      title: "Choosing Perfect Data Sources",
      description:
        "We map out exactly where to collect data from - menus, prices, deals, delivery fees, customer reviews, and availability across all relevant platforms.",
    },
    {
      number: "03",
      title: "Data Collection with Precision",
      description:
        "Our advanced tools collect live data covering real-time trends, price changes, new product launches, stock updates, and popular dishes across platforms.",
    },
    {
      number: "04",
      title: "Clean & Organized Delivery",
      description:
        "We clean, organize and format the data to fit your systems. Whether you need CSV, Excel, JSON, or API feeds - we deliver data you can actually use.",
    },
    {
      number: "05",
      title: "Continuous Data Flow",
      description:
        "We provide regular updates - daily, weekly, or real-time based on your needs. Fresh, reliable data exactly when you need it with ongoing support.",
    },
  ];

  const useCases = [
    {
      title: "Track What’s Trending on Every App— Zomato, Swiggy, Uber Eats",
      description:
        "Let’s say you run a multi-city cloud kitchen or a food analytics platform. <br/>With web scraping food delivery data, you’ll know: <br/> <ul><li>Which dishes are showing up in “most ordered” lists on Zomato</li><li>What kind of offers Swiggy is pushing in Tier 2 cities</li><li>Which cuisines Uber Eats is highlighting at dinner vs lunch</li></ul>This isn’t something you can guess on your own. It’s real-time data that you collect, so you can change your menu or marketing right when it counts.",
    },
    {
      title: "Detect Location based on the Customer Preferences",
      description:
        "As you know not all cities eat the same. Mumbai may crave wraps or their famous ‘Vada Pav’. Kolkata may be into rolls or biryani. Delhi might be in a momo phase this week.<br/>By using Uber Eats food delivery data scraping and other platform data, you can map out the preferences by:<ul><li>Pin code</li><li>Cuisine</li><li>Price range</li><li>Time of day</li></ul>This is how you launch offers that actually land and avoid generic campaigns that fall flat.",
    },
    {
      title: "Monitor Grocery Product Trends Before the Shelves Run Empty",
      description:
        "Grocery data scraping services help you find what’s flying off the shelves on Blinkit and Zepto faster than you can hit refresh.<br/>You’ll know:<ul><li>Which products are in demand (so you can stock more)</li><li>What brands are offering huge discounts</li><li>When BigBasket pushes new combo packs or seasonal deals</li></ul>",
    },
    {
      title: "Watch your Competitors Without Raising Eyebrows",
      description:
        "Why manually check prices every day when our Grocery & Supermarket Data Extraction Service can do it for you?<br/>You can monitor:<ul><li>Delivery fees across various platforms</li><li>Menu changes from competitors</li><li>Pricing shifts based on time, location, or demand</li><li>Discount patterns and how often they get change</li></ul>",
    },
  ];

  const benefits = [
    {
      title: "Speed & Accuracy",
      description:
        "Get real-time data faster than manual monitoring, with 99.9% accuracy using advanced scraping techniques that bypass common blocking mechanisms.",
    },
    {
      title: "Legal & Compliant",
      description:
        "We follow all legal, ethical guidelines and respect robots.txt, site terms, and data policies. Fully compliant data collection you can trust.",
    },
    {
      title: "Custom Solutions",
      description:
        "Every business is different. We create custom scraping plans based on your specific platforms, data requirements, and delivery frequency needs.",
    },
    {
      title: "Ongoing Support",
      description:
        "We don't disappear after delivery. Ongoing support includes data refresh schedules, source updates when platforms change, and format adjustments.",
    },
  ];

  const faqs = [
    {
      question:
        "Can you collect data from grocery apps like BigBasket and Blinkit?",
      answer:
        "Yes. Our grocery data scraping services include BigBasket, Blinkit, Zepto, and many other major platforms.",
    },
    {
      question: "What kind of data can I get from this service?",
      answer:
        "You can get menus, prices, offers, delivery fees, reviews, delivery zones, stock availability, and trending items from food and grocery platforms.",
    },
    {
      question: "What if the websites change their layout?",
      answer:
        "We monitor and update our scraping tools to keep your data flowing smoothly.",
    },
    {
      question: "Can this help my restaurant or grocery business grow?",
      answer:
        "Yes! By using our food and grocery delivery data scraping that lets you decide faster and stay ahead of the competition.",
    },
    {
      question: "Do you provide Uber Eats food delivery data scraping?",
      answer:
        "Yes, we do. Uber Eats is fully covered under our food delivery data scraping services, along with other major platforms that you can rely on.",
    },

    {
      question: "Still Wondering If It’s for You?",
      answer:
        "<p>Here’s the truth:<ul><li>If you run a restaurant, this data helps you create the nextbestseller</li><li>If you’re a grocery delivery app, it helps you dominate bycity, zone, and product line</li><li>If you’re building a food-tech tool, it gives you thereal-world intelligence your features need</li><li>If you’re in e-commerce, this is your shortcut to pricingsmarter, stocking better, and selling more</li></ul></p>",
    },
  ];

  return (
    <div className="food-delivery-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  How Food and Grocery Delivery Scraping Adds the Perfect
                  Flavour to Your Business?
                </h1>
                <p className="hero-subtitle">
                  Every time when you scroll through Zomato or Swiggy to decide
                  what you are going to eat, there's something happening behind
                  the scenes— the data is being created.The question that comes
                  to your mind— What’s trending? What’s overpriced? What gets
                  ignored? What customers order again and again?
                </p>
                <p className="hero-subtitle">
                  Now imagine if you could just collect that data and not just
                  from Zomato or Swiggy, but also from Uber Eats, Blinkit,
                  Zepto, BigBasket. That’s what web scraping food delivery data
                  lets you do.
                </p>
                <a href="#contact" className="hero-cta">
                  <i className="fas fa-rocket"></i>
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                Why Food Delivery Data Scraping Matters Now More Than Ever
              </h2>
              <div className="section-content">
                <div className="insight-card">
                  <i className="fas fa-utensils insight-icon"></i>
                  <div className="insight-content">
                    <h4>People's Food Habits Change Fast</h4>
                    <p>
                      One viral reel, one festival, one weather change and
                      suddenly people switch from biryani to cold coffee. If
                      you’re still making decisions based on last month’s data,
                      you’ve already missed out many things.
                    </p>
                    <p>
                      That’s why Food Delivery Data Scraping is powerful and
                      very much needed— it gives you real-time insights into
                      what’s actually happening on platforms like Zomato,
                      Swiggy, and Uber Eats right now.
                    </p>
                  </div>
                </div>

                <div className="insight-card">
                  <i className="fas fa-shopping-basket insight-icon"></i>
                  <div className="insight-content">
                    <h4>Grocery Delivery is Getting Hyperlocal</h4>
                    <p>
                      Apps like Blinkit, Zepto, and BigBasket are changing the
                      game every week. Flash sales, surge pricing, new product
                      launches. With Grocery Delivery Data Scraping, you track
                      it all without refreshing 10 apps manually...
                      <ul>
                        <li>What offers are live</li>
                        <li>What products are out of stock</li>
                        <li>
                          What categories are getting the most clicks in your
                          city
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="insight-card">
                  <i className="fas fa-chart-bar insight-icon"></i>
                  <div className="insight-content">
                    <h4>It's No Longer About Presumptions</h4>
                    <p>
                      At this point of time, Grocery & Supermarket Data
                      Extraction Services steps in. You don’t need to sit and
                      scroll through various apps. We do all the heavy work like
                      scraping prices, SKUs, combos, delivery slots— whatever
                      matters to your business.
                    </p>
                    <p>
                      And it’s all legal, structured, and delivered in the
                      format you want (CSV, Excel, JSON, APIs).
                    </p>
                    <p>
                      Whether you’re tracking Uber Eats food delivery data
                      scraping to find trending dishes, or monitoring BigBasket
                      and Blinkit through Grocery data scraping services— one
                      thing’s very clear: Real-time data= better and faster
                      decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                What Our Food & Grocery Data Scraping Covers
              </h2>
              <p className="section-description">
                Think of it like having an army of bots who never sleep,
                collecting real-time data from Zomato, Swiggy, Uber Eats,
                BigBasket, Blinkit, and more.
              </p>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <i className={`fas ${feature.icon} feature-icon`}></i>
                <h4 className="feature-title">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" ref={addToRefs}>
        <div className="container">
          <h2 className="process-title">
            How Our Food & Grocery Data Scraping Process Works
          </h2>
          <p className="process-subtitle">
            Clean, organized data delivery without the mess, without the delays.
          </p>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                What Can You Do with Food Delivery Data Scraping?
              </h2>
              <p className="section-description">
                Data collection alone won't move the needle. Using that data the
                right way— that's where the magic happens.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {useCases.map((useCase, index) => (
                <div className="use-case-card" key={index}>
                  <div className="use-case-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="use-case-content">
                    <h4 className="use-case-title">{useCase.title}</h4>
                    <p
                      className="use-case-description"
                      dangerouslySetInnerHTML={{ __html: useCase.description }}
                    >
                      {/* {useCase.description} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                Why Choose The One Crawling Solution for Food & Grocery Data
                Scraping?
              </h2>
              <p className="section-description">
                There’s this one thing that “the right data at the right time
                can change everything”. It works best when it fits how you work
                and comes from the people who understand what’s at stake. That’s
                what we bring at The One Crawling Solution.
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="faq-title">
                Short FAQs for Food & Grocery Delivery Data Scraping
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h4 className="faq-question">
                    <span className="faq-icon">❓</span>
                    {faq.question}
                  </h4>
                  <p
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  >
                    {/* {faq.answer} */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="final-cta-title">Ready to Scrape Smarter?</h2>
              <p className="final-cta-description">
                If growing your business with Grocery Delivery Data Scraping or
                Food Delivery Data Scraping is on your mind, this is the time to
                start. Let's get on a quick call and show you the kind of
                results you can expect.
              </p>
              <p className="final-cta-description">
                At The One Crawling Solution, we don't just give you data. We
                give you a real edge.
              </p>
              <button className="cta-button cta-secondary">
                <i className="fas fa-phone"></i>
                Reach Out to Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDeliveryPage;
