import {
  Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Malla Venkata Sai Ashish",
  initials: "Ashish",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad,+India",
  about:
    "Backend Engineer, Devops enthusiast, Community Guy and dedicated to learning new technologies.",
  summary: (
    <>
      Software Engineer with a strong foundation in computer science and practical experience in designing, developing, and deploying web applications. Proficient in Python and Go, with knowledge of cloud technologies such as AWS. Experienced in building backend services and seamlessly integrating various components and technologies.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/74368820?v=4",
  personalWebsiteUrl: "https://im45145v.dev/",
  contact: {
    email: "im45145v@gmail.com",
    tel: "+91 7997642581",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/im45145v",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/im45145v/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/im45145v",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sreenidhi Institute of Science & Technology",
      degree: "Bachelor of Technology - Computer Science and Engineering (AI & ML)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Company",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Job Position",
      logo: Logo,
      start: "2024",
      end: null,
      description: (
        <>
          Sed eget felis lacus. Maecenas placerat diam a tincidunt viverra.
          <ul className="list-inside list-disc">
            <li>
              Praesent hendrerit justo et nisl dapibus, porttitor placerat nisi efficitur.
            </li>
            <li>
              Donec viverra urna in porta dignissim, nunc suscipit aliquet elementum, etiam vestibulum.
            </li>
            <li>
              Curabitur venenatis magna lacinia, vulputate nisl ac, fermentum turpis.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Company",
      link: "about:blank",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
      ],
      title: "Job Position",
      logo: Logo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Quisque vitae elementum orci. In hac habitasse platea dictumst.
          <ul className="list-inside list-disc">
            <li>
              Duis ornare ligula nec tincidunt mattis, crabitur lectus neque.
            </li>
            <li>
              Donec porttitor nec magna quis facilisis mauris, rutrum a diam vitae rhoncus donec luctus.
            </li>
            <li>
              Phasellus nibh felis, scelerisque aliquet cursus a, blandit id sem, nam aliquet dolor.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Company",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "Job Position",
      logo: Logo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Sed aliquet hendrerit odio, in elementum ante convallis quis.
          <ul className="list-inside list-disc">
            <li>
              Donec blandit nibh at felis vehicula vehicula, nunc semper porttitor malesuada.
            </li>
            <li>
              Etiam rutrum dolor vel elit cursus elementum.
            </li>
            <li>
              Curabitur urna sem, faucibus auctor dignissim a, eleifend at mauris.
            </li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "Python",
    "Go",
    "C",
    "C++",
    "MySQL",
    "MongoDB",
    "AWS",
    "Flask",
    "Gin",
    "GitHub",
    "Docker",
    "Postman",
    "WebDev",
    "Linux"
  ],
  projects: [
    {
      title: "Campus Nourish",
      techStack: ["MongoDB", "Streamlit", "Web Development"],
      description:
        "Implemented a web app for hostelers to view food availability, vote on meal options, and stay informed through polling and notice board features.",
      logo: Logo,
      link: {
        label: "https://github.com/im45145v/CampusNourish",
        href: "https://github.com/im45145v/CampusNourish",
      },
    },
    {
      title: "SnippetSafe",
      techStack: ["React.js", "JavaScript", "MongoDB", "Hugging Face", "GoDaddy"],
      description:
        "Built a code snippet storage tool with React.js and MongoDB, allowing efficient retrieval using AI-powered search.",
      logo: Logo,
      link: {
        label: "https://devpost.com/software/snippetsafe",
        href: "https://devpost.com/software/snippetsafe",
      },
    },
    {
      title: "Flowmingo",
      techStack: ["Flow Blockchain", "IPFS", "Streamlit"],
      description:
        "Developed a platform to manage smart contracts, NFTs, and patents on the Flow blockchain using IPFS for storage.",
      logo: Logo,
      link: {
        label: "https://devpost.com/software/flowmingo",
        href: "https://devpost.com/software/flowmingo",
      },
    },
    {
      title: "NAASH (Not Another AI Shell)",
      techStack: ["TypeScript", "Bun", "Gemini", "OpenAI"],
      description:
        "Made an AI-powered terminal shell that simplifies workflows with smart clipboard integration, natural language commands, and system-aware intelligence.",
      logo: Logo,
      link: {
        label: "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b",
        href: "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b",
      },
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      institution: "AWS",
      // start: "2024",
      // end: "2024",
    },
    {
      name: "GitHub Foundations",
      institution: "GitHub",
      // start: "2024",
      // end: "2024",
    },
  ],
  achievements: [
    {
      title: "Won 20+ national and international hackathons",
      description: "Conducted by various organizations.",
      // start: "2023",
      // end: "2024",
    },
    {
      title: "Patent for Smart Semi-Autonomous Hay and Water Dispenser for cattle",
      description: "Patent ID: 390029-001",
      // start: "2023",
      // end: "2024",
    },
  ],
  positions: [
    {
      title: "Lead at Hackerabad",
      description: "Led peer-driven events and community initiatives fostering collaboration and technical growth, impacting 1000+ people; managed logistics, volunteers, and community needs for seamless execution.",
      start: "2022",
      end: "Present",
    },
    {
      title: "Postman Student Leader",
      description: "Organized 5+ workshops and events to introduce the Postman tool and API-first development practices, collaborating with diverse student groups to foster API literacy among the next generation of developers.",
      start: "2024",
      end: "Present",
    },
    {
      title: "Event Organizer",
      description: "Organized hackathons and tech events, including 3 editions of CodeDay (100+ attendees) and HackPrix (500+ hackers), providing underserved students with hands-on experience in exploring tech careers while managing event logistics, participant engagement, and post-event feedback.",
      start: "2023",
      end: "Present",
    },
    {
      title: "Streamlit Ambassador",
      description: "Promoted Streamlit and Python in tech communities by organizing workshops, talks, and hands-on sessions.",
      // start: "2023",
      // end: "2024",
    },
    
  ],
} as const;