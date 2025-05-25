
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Article } from '@/types/article';

interface ArticleContextType {
  articles: Article[];
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (id: string, article: Omit<Article, 'id'>) => void;
  deleteArticle: (id: string) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'Villa moderne avec piscine',
      content: 'Magnifique villa moderne avec piscine, jardin et vue imprenable...',
      category: 'Marché',
      author: 'Agent Immobilier',
      date: '2024-01-15',
      excerpt: 'Découvrez cette villa exceptionnelle dans un cadre privilégié',
      imageUrl: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Appartement centre-ville',
      content: 'Bel appartement au cœur de la ville, proche de toutes commodités...',
      category: 'Investissement',
      author: 'Conseiller Immobilier',
      date: '2024-01-10',
      excerpt: 'Investissement rentable en centre-ville',
      imageUrl: '/placeholder.svg'
    }
  ]);

  const addArticle = (articleData: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...articleData,
      id: Date.now().toString(),
    };
    setArticles(prev => [newArticle, ...prev]);
  };

  const updateArticle = (id: string, articleData: Omit<Article, 'id'>) => {
    setArticles(prev => prev.map(article => 
      article.id === id ? { ...articleData, id } : article
    ));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(article => article.id !== id));
  };

  return (
    <ArticleContext.Provider value={{
      articles,
      addArticle,
      updateArticle,
      deleteArticle
    }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
};
