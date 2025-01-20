import { useState } from 'react';
import Form from './components/Form';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (title) => {
    setArticles([...articles, title]);
  };

  const deleteArticle = (index) => {
    setArticles(articles.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1>Blog</h1>
      <Form addArticle={addArticle} />
      <ArticleList articles={articles} deleteArticle={deleteArticle} />
    </div>
  )
}

export default App