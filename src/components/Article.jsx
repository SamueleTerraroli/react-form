const Article = ({ title, deleteArticle }) => {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {title}
      <button onClick={deleteArticle} className="btn btn-danger btn-sm">Elimina</button>
    </li>
  )
}

export default Article
