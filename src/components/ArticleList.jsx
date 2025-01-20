import Article from "./Article"

const ArticleList = ({ articles, deleteArticle }) => {

    return (
        <ul className="list-group">
            {articles.map((title, index) => (
                <Article
                    key={index}
                    title={title}
                    deleteArticle={() => deleteArticle(index)}
                />
            ))}
        </ul>
    )
}

export default ArticleList