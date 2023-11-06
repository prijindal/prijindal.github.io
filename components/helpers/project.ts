export type Project = {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  links: {
    github?: string;
    website?: string;
    android?: string;
    builds?: string;
  };
};

export const projects: Project[] = [
  // {
  //   id: "f1_game_race_manager",
  //   name: "F1 Race Manager",
  //   description: "A desktop app to create overlays for F1 23 game",
  //   images: [],
  //   tags: ["electron", "f1"],
  //   links: {},
  // },
  {
    id: "f1_results",
    name: "F1 Results",
    description:
      "An app which allows users to follow along with previous seasons of f1 without looking at any spoilers",
    images: ["/projects/f1_results_1.jpg", "/projects/f1_results_2.jpg"],
    tags: ["flutter", "f1", "open_source"],
    links: {
      github: "https://github.com/prijindal/f1_results",
      website: "https://f1-results-prijindal.web.app/",
      android:
        "https://play.google.com/store/apps/details?id=com.prijindal.f1_results",
      builds:
        "https://nightly.link/prijindal/f1_results/workflows/flutter/main",
    },
  },
  {
    id: "fastter_todo",
    name: "Fastter Todo",
    description: "A feature rich offline only todo app",
    images: ["/projects/fastter_todo_1.png", "/projects/fastter_todo_2.png"],
    tags: ["flutter", "productivity", "open_source"],
    links: {
      github: "https://github.com/prijindal/fastter-todo",
      website: "https://fastter-todo.web.app/",
      android:
        "https://play.google.com/store/apps/details?id=com.prijindal.fastter_todo",
      builds:
        "https://nightly.link/prijindal/fastter-todo/workflows/flutter/main",
    },
  },
  {
    id: "habbit_tracker",
    name: "Habbit Tracker",
    description: "An app to track your daily habits and analyze them",
    images: [
      "/projects/habbit_tracker_1.jpg",
      "/projects/habbit_tracker_2.jpg",
    ],
    tags: ["flutter", "productivity", "open_source"],
    links: {
      github: "https://github.com/prijindal/habbit_tracker",
      website: "https://habbit-tracker-prijindal.web.app/",
      android:
        "https://play.google.com/store/apps/details?id=com.prijindal.habbit_tracker",
      builds:
        "https://nightly.link/prijindal/habbit_tracker/workflows/flutter/main",
    },
  },
  {
    id: "betro",
    name: "Betro",
    description: "A social media app which is end to end encrypted by default",
    images: ["/projects/betro-1.jpg", "/projects/betro-2.jpg"],
    tags: ["flutter", "react", "nodejs", "open_source"],
    links: {
      github: "https://github.com/prijindal/betro",
      builds: "https://nightly.link/prijindal/betro/workflows/flutter/main",
    },
  },
  {
    id: "alakart",
    name: "A La Kart",
    description: "(depreceated) An app to order food around vellore",
    images: [
      "/projects/alakart_1.png",
      "/projects/alakart_2.png",
      "/projects/alakart_3.png",
    ],
    tags: ["depreceated", "angular"],
    links: {},
  },
  {
    id: "vitacademics",
    name: "VITacademics",
    description: "(depreceated) A website to track your class scheduling",
    images: ["/projects/vitacademics-web-1.png"],
    tags: ["depreceated", "angular"],
    links: {
      github: "https://github.com/CollegeCODE/VITacademics-Web",
    },
  },
  {
    id: "readgit",
    name: "ReadGit",
    description: "(depreceated) A github client written with ionic",
    images: ["/projects/readgit-1.png"],
    tags: ["depreceated", "angular", "ionic", "open_source"],
    links: {
      github: "https://github.com/prijindal/readgit",
      website: "https://prijindal.github.io/readGit/",
    },
  },
];
