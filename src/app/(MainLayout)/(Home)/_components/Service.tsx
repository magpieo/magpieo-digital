import Image from "next/image";
import img from "../../../../asset/logo/logo.png";

const services = [
  {
    title: "Branding",
    description:
      "At Magpieo, our branding services focus on building a strong, lasting identity for your business. We combine minimal design aesthetics with strategic storytelling to craft brand experiences that resonate globally. From logo creation to full-scale brand strategies, we ensure your business leaves a lasting impression, builds trust, and inspires loyalty.",
    keywords: ["Logo Design & Visual Identity", "Brand Strategy", "Storytelling"],
    image: img,
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging digital experiences. Our team blends creativity with usability to create seamless user journeys across web and mobile platforms. From research to wireframing, every detail is crafted to delight your audience.",
    keywords: ["Wireframing & Prototyping", "User Research", "Interaction Design"],
    image: img,
  },
  {
    title: "Web Development",
    description:
      "Our web development solutions bring your ideas to life with scalable, high-performance websites. We focus on speed, responsiveness, and functionality while ensuring modern aesthetics and optimized SEO for visibility.",
    keywords: ["Responsive Websites", "Full-Stack Development", "SEO Optimization"],
    image: img,
  },
  {
    title: "App Design",
    description:
      "From concept to launch, we design apps that engage and perform. Our team ensures sleek UI, smooth UX, and platform-native solutions that meet user needs while standing out in the app marketplace.",
    keywords: ["Mobile App UI", "Cross-Platform Design", "Prototyping"],
    image: img,
  },
  {
    title: "Digital Marketing",
    description:
      "We help brands grow online with smart digital strategies. From social media campaigns to targeted ads, SEO, and content marketing, we drive visibility, traffic, and conversions for sustainable growth.",
    keywords: ["Social Media Marketing", "Content Strategy", "Paid Ads & SEO"],
    image: img,
  },
];

const OurService = () => {
  return (
    <div className="py-10">
      <div className="text-left mb-10">
        <p className="capitalize font-extrabold text-3xl">our services</p>
        <p className="text-slate-400">Crafting digital experiences that inspire</p>
      </div>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex-1">
              <p className="text-2xl font-semibold text-white mb-2">
                {service.title}
              </p>
              <p className="text-slate-300 mb-3">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword, i) => (
                  
                  <span
                    key={i}
                    className="  text-slate-200 px-3 py-1 text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[20%]">
              <Image src={service.image} height={100} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
