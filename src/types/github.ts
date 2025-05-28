export type User = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  location: string | null;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};
