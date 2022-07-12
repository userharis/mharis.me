import SectionLabel from "./sectionLabel";
import Button from "../button";
import * as styles from "../../styles/home/blog.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const { blog, postsContainer, blogPost, btnContainer } = styles;

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___updatedAt, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            slug
            title
            updatedAt(formatString: "MMMM DD, YYYY")
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className={blog}>
      <SectionLabel>Articles I Wrote Recently</SectionLabel>
      <div className={postsContainer}>
        {data.allMarkdownRemark.nodes.map((node, i) => {
          return <BlogPost key={i} data={node.frontmatter} />;
        })}
      </div>
      <div className={btnContainer}>
        <Button to="/blog">visit my blog</Button>
      </div>
    </section>
  );
};

const BlogPost = ({ data }) => {
  const { title, updatedAt, slug, thumb } = data;
  const image = getImage(thumb);

  return (
    <article className={blogPost}>
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

export default Blog;
