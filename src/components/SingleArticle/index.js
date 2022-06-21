import "./SingleArticle.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { id } = useParams();

  const articles = useSelector((state) => state.articleState.entries);
  const singleArt = articles.find((article) => article.id === id);

  return (
    <div className="singleArticle">
      <h1>{singleArt.title}</h1>
      <img src={singleArt.imageUrl} alt="home" />
      <p>{singleArt.body}</p>
    </div>
  );
};

export default SingleArticle;
