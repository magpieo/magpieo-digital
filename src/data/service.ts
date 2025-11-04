import web from "../asset/service/Magpieo-Digital-Web-Design-Development-Agency-Custom-Website.jpg";
import app from "../asset/service/Magpieo-Digital-App-Design-Mobile-UX-UI-Interface.jpg";
import branding from "../asset/service/Magpieo-Digital-Branding-Brand-Building-Strategy-Agency.jpg";
import marketing from "../asset/service/Magpieo-Digital-Digital-Marketing-SEO-Analytics-Strategy.jpg";
import ui from "../asset/service/Magpieo-Digital-UIUX-Design-Process-Wireframing-Prototyping.jpg";

export const services = [
  {
    id: "1",
    slug: "branding", // ✅ new field for route
    title: "Branding",
    subTitle: "Build a Brand That Speaks Before You Do",
    description:
      "At Magpieo, our branding services focus on building a strong, lasting identity for your business. We combine minimal design aesthetics with strategic storytelling to craft brand experiences that resonate globally.",
    keywords: ["Logo Design & Visual Identity", "Brand Strategy", "Storytelling"],
    image: branding,
    buttonText: "Build My Brand",
  },
  {
    id: "2",
    slug: "ui-ux-design", // ✅
    title: "UI/UX Design",
    subTitle: "Human-Centered Design That Converts",
    description:
      "We design intuitive and engaging digital experiences. Our team blends creativity with usability to create seamless user journeys across web and mobile platforms.",
    keywords: ["Wireframing", "User Research", "Interaction Design"],
    image: ui,
    buttonText: "Design My Experience",
  },
  {
    id: "3",
    slug: "web-development", // ✅
    title: "Web Development",
    subTitle: "High-Performance Websites Built to Grow",
    description:
      "Our web development solutions bring your ideas to life with scalable, high-performance websites. We focus on speed, responsiveness, and functionality.",
    keywords: ["Responsive Websites", "Full-Stack Development", "SEO Optimization"],
    image: web,
    buttonText: "Build My Website",
  },
  {
    id: "4",
    slug: "app-design", // ✅
    title: "App Design",
    subTitle: "Innovating Smarter Mobile Apps",
    description:
      "From concept to launch, we design apps that engage and perform. Our team ensures sleek UI, smooth UX, and platform-native solutions.",
    keywords: ["Mobile App UI", "Cross-Platform Design", "Prototyping"],
    image: app,
    buttonText: "Design My App",
  },
  {
    id: "5",
    slug: "digital-marketing", // ✅
    title: "Digital Marketing",
    subTitle: "Strategy, Storytelling, and Smart Growth",
    description:
      "We help brands grow online with smart digital strategies. From social media campaigns to targeted ads, SEO, and content marketing.",
    keywords: ["Social Media Marketing", "Content Strategy", "Paid Ads & SEO"],
    image: marketing,
    buttonText: "Grow My Business",
  },
];
