import { IconType } from "react-icons";
import {
  RxDesktop,
  RxRocket,
  RxAccessibility,
  RxHome,
  RxPerson,
  RxDashboard,
  RxMobile,
  RxBadge,
  RxBorderStyle,
  RxChatBubble,
} from "react-icons/rx";
import { FaGithub, FaLinkedin, FaList, FaTelegram } from "react-icons/fa";

export interface ISocial {
  Icon: IconType;
  link: string;
}

export const Social: ISocial[] = [
  {
    Icon: FaGithub,
    link: "https://github.com/Oleh-Kliapko",
  },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/feed/",
  },
  {
    Icon: FaTelegram,
    link: "https://t.me/Bayraktar_OK",
  },
];

export interface INavLink {
  Icon: IconType;
  name: string;
  link: string;
}

export const NavLinks: INavLink[] = [
  {
    name: "Home",
    Icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    Icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Favorite projects",
    Icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "All projects",
    Icon: FaList,
    link: "/all-projects",
  },
];

export interface IServiceData {
  Icon: IconType;
  title: string;
  content: string;
  backgroundImage: string;
}

export const ServiceData: IServiceData[] = [
  {
    Icon: RxRocket,
    title: "React + Redux",
    content: "1 commercial project and 10+ pet-projects",
    backgroundImage: "/assets/space/SpaceCity1.jpeg",
  },
  {
    Icon: RxMobile,
    title: "React Native",
    content: "2 pet-projects",
    backgroundImage: "/assets/space/SpaceCity2.jpeg",
  },
  {
    Icon: RxDesktop,
    title: "NodeJS, RESTful API",
    content: "1 commercial project and 5 pet-projects",
    backgroundImage: "/assets/space/SpaceCity3.jpeg",
  },
  {
    Icon: RxBadge,
    title: "MongoDB, PostgreSQL, Firebase",
    content: "1 commercial project and 3 pet-projects",
    backgroundImage: "/assets/space/SpaceCity4.jpeg",
  },
  {
    Icon: RxChatBubble,
    title: "Web-sockets",
    content: "1 commercial project",
    backgroundImage: "/assets/space/SpaceCity5.jpeg",
  },
  {
    Icon: RxBorderStyle,
    title: "Tailwind, Chakra UI",
    content: "1 commercial project and 10+ pet-projects",
    backgroundImage: "/assets/space/SpaceCity6.jpeg",
  },
  {
    Icon: RxAccessibility,
    title: "Vite, Webpack",
    content: "1 commercial project and all pet-projects",
    backgroundImage: "/assets/space/SpaceCity7.jpeg",
  },
];

export type Link = {
  git: string;
  website?: string;
  description?: string;
};

export interface IProject {
  id: number;
  title: string;
  links: Link[];
  images: string[];
}

export const Projects: IProject[] = [
  {
    id: 1,
    title: "Online store to sell spare parts for agricultural machines",
    links: [
      {
        git: "https://github.com/Zapchaztiulka/zapchaztiulka-catalog-frontend",
        website: "https://zapchaztiulka-catalog-frontend.vercel.app/",
        description: "Client catalog",
      },
      {
        git: "https://github.com/Zapchaztiulka/admin-panel-frontend",
        website: "https://admin-panel-frontend-three.vercel.app/",
        description: "Admin panel",
      },
      {
        git: "https://github.com/Zapchaztiulka/spares-backend",
        website: "https://spares-backend-i2mq.onrender.com/",
        description: "Back-end server",
      },
    ],
    images: [
      "/assets/projects/onlineStore/Store_1.jpg",
      "/assets/projects/onlineStore/Store_2.jpg",
      "/assets/projects/onlineStore/Store_3.jpg",
      "/assets/projects/onlineStore/Store_4.jpg",
    ],
  },
  {
    id: 2,
    title: "Telegram ChatGPT Bot - Communicate in a voice or text",
    links: [
      {
        git: "https://github.com/Oleh-Kliapko/TelegramGPT_Bot",
        website: "https://t.me/Conversation_GPT_Bot",
      },
    ],
    images: [
      "/assets/projects/telegrambot/bot-1.jpg",
      "/assets/projects/telegrambot/bot-2.jpg",
      "/assets/projects/telegrambot/bot-3.jpg",
      "/assets/projects/telegrambot/bot-4.jpg",
    ],
  },
  {
    id: 3,
    title: "My image book (created by React Native)",
    links: [
      {
        git: "https://github.com/Oleh-Kliapko/react-native",
        website:
          "https://expo.dev/@oleh_kliapko/my-image-book?serviceType=classic&distribution=exp",
      },
    ],
    images: [
      "/assets/projects/my-image-book/book-1.jpg",
      "/assets/projects/my-image-book/book-2.jpg",
      "/assets/projects/my-image-book/book-3.jpg",
      "/assets/projects/my-image-book/book-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Job Searching App (created by React Native)",
    links: [
      {
        git: "https://github.com/Oleh-Kliapko/Job-Seeker-React-Native",
        website:
          "https://drive.google.com/drive/folders/173ZQdt8WmXded-n6HAMs94FpRHXHu1ne",
      },
    ],
    images: [
      "/assets/projects/job-seeker/job-1.jpg",
      "/assets/projects/job-seeker/job-2.jpg",
      "/assets/projects/job-seeker/job-3.jpg",
      "/assets/projects/job-seeker/job-4.jpg",
    ],
  },
  {
    id: 5,
    title: "Goose Track - organize your life and manage your team's work",
    links: [
      {
        git: "https://github.com/Oleh-Kliapko/GooseTrack_front",
        website: "https://oleh-kliapko.github.io/GooseTrack_front/",
        description: "Client web-app",
      },
      {
        git: "https://github.com/Oleh-Kliapko/calendar_server",
        website: "https://calendar-server-g3h0.onrender.com/",
        description: "Back-end server",
      },
    ],
    images: [
      "/assets/projects/goose-track/goose-1.jpg",
      "/assets/projects/goose-track/goose-2.jpg",
      "/assets/projects/goose-track/goose-3.jpg",
      "/assets/projects/goose-track/goose-4.jpg",
    ],
  },
  {
    id: 6,
    title: "Filmoteka - the best movies of the world",
    links: [
      {
        git: "https://github.com/Allmaren/js_team_project",
        website: "https://allmaren.github.io/js_team_project/",
      },
    ],
    images: [
      "/assets/projects/filmoteka/film-1.jpg",
      "/assets/projects/filmoteka/film-2.jpg",
      "/assets/projects/filmoteka/film-3.jpg",
      "/assets/projects/filmoteka/film-4.jpg",
    ],
  },
  {
    id: 7,
    title: "Movie searcher - find your favorite movie",
    links: [
      {
        git: "https://github.com/Oleh-Kliapko/goit-react-hw-05-movies",
        website: "https://oleh-kliapko.github.io/goit-react-hw-05-movies/",
      },
    ],
    images: [
      "/assets/projects/search-movies/movies-1.jpg",
      "/assets/projects/search-movies/movies-2.jpg",
      "/assets/projects/search-movies/movies-3.jpg",
      "/assets/projects/search-movies/movies-4.jpg",
    ],
  },
  // {
  //   id: 999,
  //   title: "... and more others",
  //   links: [
  //     {
  //       git: "https://github.com/Oleh-Kliapko",
  //     },
  //   ],
  //   images: [
  //     "/assets/projects/SpaceCity1.jpeg",
  //     "/assets/projects/SpaceCity2.jpeg",
  //     "/assets/projects/SpaceCity3.jpeg",
  //     "/assets/projects/SpaceCity.jpeg",
  //   ],
  // },
];

export interface IOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface IRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IOwner;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  toSorted?(compareFn: (a: IRepo, b: IRepo) => number): IRepo[];
  repoLogoUrl?: string;
}
