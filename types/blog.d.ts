export interface Author {
  slug: string;
  name: string;
  credentials: string;
  bio: string;
  avatar: string;
  socialLinks?: { linkedin?: string; twitter?: string };
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: string;
  tags: string[];
  authorSlug: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  readingTime?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
}
