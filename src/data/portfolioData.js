/* =============================================================================
   PORTFOLIO DATA  —  THE ONLY FILE YOU NEED TO EDIT
   =============================================================================

   HOW PLACEHOLDERS WORK
   ---------------------
   • Anything written like  [THIS_STYLE]  is a placeholder. Replace it (brackets
     included) with your real information. While a placeholder is still in the
     text, the site highlights it in yellow so you can spot what's left.
   • Some values (project descriptions, tech stacks, bio text) contain SAMPLE
     text after the [PLACEHOLDER] tag so you can see how the layout looks.
     Delete the whole sample sentence and write your own.
   • Links that still contain a placeholder do nothing when clicked. Once you
     paste a real URL they become live automatically.
   • Set a link to ""  (empty quotes) to hide that button completely.
   • Images: copy your file into  /public/images  and use a path such as
     "/images/profile.jpg".  Leave the placeholder to keep the dummy box.
   ========================================================================== */

/* -----------------------------------------------------------------------------
   NAVIGATION  (usually no need to change)
   Each "id" must match a section id in the page.
----------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

/* -----------------------------------------------------------------------------
   1. HERO / HOME
----------------------------------------------------------------------------- */
export const personal = {
  // [YOUR_NAME] → your full name. Also used in the navbar, browser tab and footer.
  name: "Sasi Priyaa",

  // [YOUR_ROLE] → short title shown under your name.
  role: "Software Engineer | Mern Stack Developer | DSA Enthusiast",

  // [YOUR_SHORT_INTRO] → 2–3 lines introducing yourself. Delete the sample sentence.
  intro:
    " I enjoy building clean, useful web apps and solving problems with code. I'm looking for a software developer roles,Full Stack and BackEnd Developer roles where I can learn fast and ship real products.",

  // [AVAILABILITY_TEXT] → small status badge above your name.
  // Set to "" to hide the badge.
  availability: "Open to software developer roles",

  // [YOUR_PROFILE_IMAGE] → e.g. "/images/profile.jpg"  (portrait photo; shown at its natural proportions, never cropped)
  image: "/images/profile.jpeg",
};

/* -----------------------------------------------------------------------------
   2. ABOUT
----------------------------------------------------------------------------- */
export const about = {
  // Each string is one paragraph. Add or remove paragraphs freely.
  bio: [
    // [YOUR_SHORT_BIO] → 2–4 sentences about you. Delete the sample sentence.
    " I'm a Computer Science student who likes turning ideas into working software. I'm interested in software development, web development and the satisfaction of solving a hard problem step by step.",

    // [YOUR_CURRENT_FOCUS] → what you're learning or building right now (optional; delete this line to remove).
    " Right now I'm strengthening Problem Solving skills and building full-stack projects.",
  ],

  // Three highlight cards. Icons available: "code", "globe", "bulb", "database", "wrench"
  interests: [
    {
      icon: "code",
      title: "Software development",
      text: "Writing clean, maintainable code and building good engineering habits.",
    },
    {
      icon: "globe",
      title: "Web development",
      text: "Creating responsive, accessible interfaces with modern tools.",
    },
    {
      icon: "bulb",
      title: "Problem solving",
      text: "Breaking problems into small steps, from DSA practice to real features.",
    },
  ],
};

/* -----------------------------------------------------------------------------
   3. SKILLS
   Add, remove or rename skills in the "items" lists. Add a whole category by
   copying one block. Icons: "code", "globe", "database", "wrench", "bulb"
----------------------------------------------------------------------------- */
export const skills = [
  {
    category: "Programming",
    icon: "code",
    // [C++, Java, Python] → replace with your languages
    items: ["C++", "Java", "Python"],
  },
  {
    category: "Web",
    icon: "globe",
    // [HTML, CSS, JavaScript, React] → replace with your web skills
    items: ["HTML", "CSS", "JavaScript", "React","Node.js","Express.js"],
  },
  {
    category: "Database",
    icon: "database",
    // [SQL, MongoDB/Supabase/etc.] → replace with your databases
    items: ["SQL", "MongoDB", "Supabase"],
  },
  {
    category: "Tools",
    icon: "wrench",
    // [Git, GitHub, VS Code, Postman] → replace with your tools
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

/* -----------------------------------------------------------------------------
   4. PROJECTS  (3 cards — add or remove blocks to change the count)
   Keep each description to about 2 lines so the cards stay even.
   The tech stack lists below are SAMPLE values; replace them with yours.
----------------------------------------------------------------------------- */
export const projects = [
  {
    // [PROJECT_1_IMAGE] → e.g. "/images/project-1.png"  (landscape, about 16:10)
    image: "/images/project1.png",
    // [PROJECT_1_NAME]
    name: "Dev Connect",
    // [PROJECT_1_DESCRIPTION] → 2 lines. Delete the sample sentence.
    description:
      "A developer community platform where developers can connect, share posts, and discover other developers.",
    // [PROJECT_1_TECH_STACK] → sample values, replace with yours
    techStack: ["React", "Vite", "Node.js", "Express", "Supabase", "Google OAuth"],
    // [PROJECT_1_GITHUB_URL] → e.g. "https://github.com/you/project-1"   ("" hides the button)
    githubUrl: "https://github.com/Sasipriyaa24/DevConnect",
    // [PROJECT_1_LIVE_URL] → e.g. "https://project-1.vercel.app"   ("" hides the button)
    liveUrl: "https://dev-connect-eight-lemon.vercel.app/",
  },
  {
    // [PROJECT_2_IMAGE]
    image: "/images/project-2.png",
    // [PROJECT_2_NAME]
    name: "Risk-Lens AI",
    // [PROJECT_2_DESCRIPTION]
    description:
      "An AI-powered transaction risk investigation assistant for analyzing banking transaction data.",
    // [PROJECT_2_TECH_STACK] → sample values, replace with yours
    techStack: ["Python", "Flask", "SQL"],
    // [PROJECT_2_GITHUB_URL]
    githubUrl: "https://github.com/Sasipriyaa24/RiskLens-AI",
    // [PROJECT_2_LIVE_URL]
    liveUrl: "[PROJECT_2_LIVE_URL]",
  },
  {
    // [PROJECT_3_IMAGE]
    image: "/images/project3.png",
    // [PROJECT_3_NAME]
    name: "Ai Career Advisor",
    // [PROJECT_3_DESCRIPTION]
    description:
      "An AI-powered career guidance platform that helps users identify skill gaps and plan personalized learning paths.",
    // [PROJECT_3_TECH_STACK] → sample values, replace with yours
    techStack: ["React", "Tailwind CSS", "node.js", "Express.js", "OpenAI API"],
    // [PROJECT_3_GITHUB_URL]
    githubUrl: "https://github.com/Sasipriyaa24/Aiadvisor",
    // [PROJECT_3_LIVE_URL]
    liveUrl: "[PROJECT_3_LIVE_URL]",
  },
];

/* -----------------------------------------------------------------------------
   5. PROFILES / SOCIAL LINKS
   Keep the "id" values as they are (they pick the icon). Set a url to ""
   to hide that profile.
----------------------------------------------------------------------------- */
export const profiles = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sasi-priyaa-chowdary-korrapati-54bb95305/" }, // [LINKEDIN_URL]
  { id: "github", label: "GitHub", url: "https://github.com/Sasipriyaa24/" }, // [GITHUB_URL]
  { id: "x", label: "X / Twitter", url: "https://x.com/SasiPriyaa_24" }, // [X_URL]
];

/* -----------------------------------------------------------------------------
   6. EDUCATION  (newest first)
   Each "details" row appears as a small label + value pair.
----------------------------------------------------------------------------- */
export const education = [
  {
    degree: "B.Tech",
    institution: "KKR & KSR Institute of Technology And Sciences", // [COLLEGE_NAME]
    years: "2023 - 2027", // [START_YEAR - END_YEAR]
    details: [
      { label: "Branch", value: "CSD" }, // [BRANCH]
      { label: "CGPA / Percentage", value: "9.0" }, // [CGPA_OR_PERCENTAGE]
    ],
  },
  {
    degree: "Intermediate / 12th",
    institution: "Sri Naga Bhairava Jr College", // [INTERMEDIATE_COLLEGE_NAME]
    years: "2021-2023", // [YEAR]
    details: [
      { label: "Percentage", value: "96.8" }, // [INTERMEDIATE_PERCENTAGE]
    ],
  },
  {
    degree: "School / 10th",
    institution: "Mana Sasi High School", // [SCHOOL_NAME]
    years: "2021", // [YEAR]
    details: [
      { label: "Percentage", value: "100" }, // [SCHOOL_PERCENTAGE]
    ],
  },
];

/* -----------------------------------------------------------------------------
   7. CONTACT
----------------------------------------------------------------------------- */
export const contact = {
  email: "sasipriyaa4424@gmail.com", // [YOUR_EMAIL] → e.g. "you@example.com"
  location: "India", // [YOUR_LOCATION] → e.g. "City, State, Country"

  // HOW THE CONTACT FORM SENDS MESSAGES
  //  • Leave formEndpoint as "" → the form opens the visitor's email app,
  //    pre-filled and addressed to the email above. No setup needed.
  //  • Or create a free form at https://formspree.io and paste its URL here
  //    (e.g. "https://formspree.io/f/abcdwxyz") → messages arrive in your inbox
  //    without opening an email app.
  formEndpoint: "",
};
