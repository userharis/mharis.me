import SectionLabel from "./sectionLabel";
import Button from "../button";
import BlogPost from "../blogPost";
import * as styles from "../../styles/home/blog.module.css";
import { graphql, useStaticQuery } from "gatsby";

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
          return (
            <BlogPost key={i} data={node.frontmatter} className={blogPost} />
          );
        })}
      </div>
      <div className={btnContainer}>
        <Button to="/blog">visit my blog</Button>
      </div>
    </section>
  );
};

export default Blog;
