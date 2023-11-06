export type Project = {
  id: string;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
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
    name: "F1 Results No Spoiler",
    description:
      "An app which allows users to follow along with previous seasons of f1 without looking at any spoilers",
    defaultImage: "/projects/f1_results_1.jpg",
    images: ["/projects/f1_results_1.jpg", "/projects/f1_results_2.jpg"],
    links: {
      github: "https://github.com/prijindal/f1_results",
      website: "https://f1-results-prijindal.web.app/",
      android:
        "https://play.google.com/store/apps/details?id=com.prijindal.f1_results",
      builds:
        "https://nightly.link/prijindal/f1_results/workflows/flutter/main",
    },
  },
];
