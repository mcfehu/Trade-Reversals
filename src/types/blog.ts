export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  coverImage?: string;
  tags: string[];
  readTime: number;
}