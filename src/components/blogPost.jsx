import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as styles from "../styles/blogPost.module.css";

const { blogPost } = styles;

const BlogPost = ({ data, className }) => {
  const { title, updatedAt, slug, thumb } = data;
  const image = getImage(thumb);

  return (
    <article className={`${blogPost} ${className}`}>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <p>{updatedAt}</p>
      <Link to={`/blog/${slug}`}>
        <h3>{title}</h3>
      </Link>
    </article>
  );
};

export default BlogPost;
