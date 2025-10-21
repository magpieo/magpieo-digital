import web from "../asset/service/Magoieo_Digital_WebDesign.jpg";
import app from "../asset/service/Magpieo_Digital_App_Design.jpg";
import branding from "../asset/service/Magpieo_Digital_Branding.png";
import marketing from "../asset/service/Magpieo_Digital_Digital_Marketing.jpg";
import ui from "../asset/service/Magpieo_Digital_uiux_ design.jpg";

export const services = [
  {
    id: "1",
    title: "Branding",
    description:
      "At Magpieo, our branding services focus on building a strong, lasting identity for your business. We combine minimal design aesthetics with strategic storytelling to craft brand experiences that resonate globally.",
    keywords: ["Logo Design & Visual Identity", "Brand Strategy", "Storytelling"],
    image: branding,
    buttonText: "Build My Brand",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging digital experiences. Our team blends creativity with usability to create seamless user journeys across web and mobile platforms.",
    keywords: ["Wireframing", "User Research", "Interaction Design"],
    image: ui,
    buttonText: "Design My Experience",
  },
  {
    id: "3",
    title: "Web Development",
    description:
      "Our web development solutions bring your ideas to life with scalable, high-performance websites. We focus on speed, responsiveness, and functionality.",
    keywords: ["Responsive Websites", "Full-Stack Development", "SEO Optimization"],
    image: web,
    buttonText: "Build My Website",
  },
  {
    id: "4",
    title: "App Design",
    description:
      "From concept to launch, we design apps that engage and perform. Our team ensures sleek UI, smooth UX, and platform-native solutions.",
    keywords: ["Mobile App UI", "Cross-Platform Design", "Prototyping"],
    image: app,
    buttonText: "Design My App",
  },
  {
    id: "5",
    title: "Digital Marketing",
    description:
      "We help brands grow online with smart digital strategies. From social media campaigns to targeted ads, SEO, and content marketing.",
    keywords: ["Social Media Marketing", "Content Strategy", "Paid Ads & SEO"],
    image: marketing,
    buttonText: "Grow My Business",
  },
];
