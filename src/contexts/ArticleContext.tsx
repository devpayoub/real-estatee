
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
      title: 'Guide du marché immobilier 2024',
      content: 'Analyse complète du marché immobilier français en 2024...',
      category: 'Marché',
      author: 'Expert Immobilier',
      date: '2024-01-15',
      excerpt: 'Découvrez les tendances du marché immobilier français',
      imageUrl: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'Investissement locatif : conseils pratiques',
      content: 'Les meilleures stratégies pour investir dans l\'immobilier locatif...',
      category: 'Investissement',
      author: 'Conseiller Financier',
      date: '2024-01-10',
      excerpt: 'Maximisez vos revenus locatifs avec nos conseils d\'experts',
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
