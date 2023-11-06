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
  {
    id: "f1_results",
    name: "F1 Results",
    description:
      "An app which allows users to follow along with previous seasons of f1 without looking at any spoilers",
    images: ["/projects/f1_results_1.jpg", "/projects/f1_results_2.jpg"],
    tags: ["flutter", "f1"],
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
    tags: ["flutter", "productivity"],
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
    tags: ["flutter", "productivity"],
    links: {
      github: "https://github.com/prijindal/habbit_tracker",
      website: "https://habbit-tracker-prijindal.web.app/",
      android:
        "https://play.google.com/store/apps/details?id=com.prijindal.habbit_tracker",
      builds:
        "https://nightly.link/prijindal/habbit_tracker/workflows/flutter/main",
    },
  },
];
