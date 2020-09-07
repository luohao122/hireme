import AnnieImg from "../../assets/images/annie.png";
import StayJapanImg from "../../assets/images/stayjapan.png";
import ImageStoreImg from "../../assets/images/imagestore.png";

export const projects = [
  {
    id: `p2-${new Date().toISOString()}`,
    image: StayJapanImg,
    name: "StayJapan",
    title: "Front End Engineer",
    company: "Hyakusenrenma VN",
    isHero: false,
    link: "https://stayjapan.com",
    programmingLanguage: [
      "css3",
      "html5",
      "scss",
      "sass",
      "javascript",
      "coffeescript",
      "bootstrap",
      "jquery",
      "slim",
    ],
    description:
      "Much like Airbnb, StayJapan provided housing rentals for travellers who'd love to explore Japan with a unique experience.",
  },
  {
    id: `p1-${new Date().toISOString()}`,
    image: AnnieImg,
    name: "Learn Vietnamese With Annie",
    title: "Fullstack Developer",
    company: "Learn Vietnamese With Annie",
    isHero: false,
    link: "https://learnvietnamesewithannie.com",
    programmingLanguage: [
      "php",
      "codeigniter",
      "mysql",
      "css3",
      "html5",
      "javascript",
      "bootstrap",
      "jquery",
    ],
    description:
      "An E-learning website for foreigners who'd love to learn Vietnamese for variety of purporses such as traveling, business, communicating.",
  },
  {
    id: `p3-${new Date().toISOString()}`,
    image: ImageStoreImg,
    name: "ImageStore",
    title: "Front End Engineer",
    company: "Sezax VN",
    isHero: true,
    programmingLanguage: [
      "css3",
      "html5",
      "scss",
      "sass",
      "javascript",
      "coffeescript",
      "bootstrap",
      "jquery",
      "slim",
      "d3js",
      "mustachejs",
    ],
    link: "",
    description:
      "ImageStore is a content management system, where users can upload media files, documents and many kind of content files to either share or use for internal purpose.",
  },
];
