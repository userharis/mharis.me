import { graphql, useStaticQuery } from "gatsby";
import BlogPost from "../blogPost";
import * as styles from "../../styles/blog/posts.module.css";

const { container, post } = styles;

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            updatedAt(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);
  return (
    <section className={container}>
      {data.allMarkdownRemark.nodes.map((node, index) => {
        return (
          <BlogPost data={node.frontmatter} key={index} className={post} />
        );
      })}
    </section>
  );
};

export default Posts;
