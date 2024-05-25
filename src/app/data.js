/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Tour & Travel",
    description: "Find the world around you",
    date: "2022-12-15",
    demoLink: "https://final-project-neon.vercel.app/",
  },
  {
    id: 2,
    name: "Admin Panel DashBoard",
    description: "Admin Panel Design using React",
    date: "2023-09-20",
    demoLink: "https://admin-project-opal.vercel.app/",
  },
  {
    id: 3,
    name: "Hotel-Booking-Management-System",
    description: "Plan your next spot for stay",
    date: "2024-03-10",
    demoLink: "https://github.com/pratul03/Hotel-Booking-Management-System",
  },
  {
    id: 4,
    name: "ReConnect",
    description: "A simple Chat application using react and firebase",
    date: "2024-05-25",
    demoLink: "https://github.com/pratul03/ReConnect",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/pratul03",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/Pratul-Makar/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/Pratul24450247",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "./Pmresume.pdf",
    icon: "resume",
    newTab: true,
  },
];
