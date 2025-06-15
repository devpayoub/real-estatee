
import { Article } from "@/types/article";

// Extended Article type with additional fields for admin
export interface ArticleWithExtendedFields extends Article {
  images: string[];
  tags: string[];
  status: "draft" | "published" | "archived";
}

// In-memory storage for articles
let articles: ArticleWithExtendedFields[] = [
  {
    id: "1",
    title: "Marché immobilier 2024",
    content: "Le marché immobilier connaît une évolution intéressante en 2024...",
    category: "Marché",
    author: "Expert Immobilier",
    date: "2024-01-15",
    excerpt: "Analyse des tendances du marché immobilier pour 2024",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"],
    tags: ["marché", "2024", "tendances"],
    status: "published"
  }
];

export const getArticles = (): ArticleWithExtendedFields[] => {
  return [...articles];
};

export const addArticle = (articleData: Omit<ArticleWithExtendedFields, "id">) => {
  const newArticle: ArticleWithExtendedFields = {
    ...articleData,
    id: Date.now().toString(),
  };
  articles.push(newArticle);
  return newArticle;
};

export const updateArticle = (id: string, articleData: Partial<Omit<ArticleWithExtendedFields, "id">>) => {
  const index = articles.findIndex(article => article.id === id);
  if (index !== -1) {
    articles[index] = { ...articles[index], ...articleData };
    return articles[index];
  }
  return null;
};

export const deleteArticle = (id: string) => {
  const index = articles.findIndex(article => article.id === id);
  if (index !== -1) {
    articles.splice(index, 1);
    return true;
  }
  return false;
};

export type { ArticleWithExtendedFields as Article };
