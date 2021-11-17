import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link style={{ color: "white" }} to={`/post/${post.id}`}>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">
          {post.body.length <= 55 ? post.body : `${post.body.slice(0, 150)}...`}
        </p>
      </Link>
    </article>
  );
};

export default Post;
