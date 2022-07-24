import Layout from "../../components/layout/layout";
import Container from "../../components/layout/container";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import "prismjs/themes/prism-tomorrow.css";
import * as styles from "../../styles/pages/blog/post.module.css";

const { main, smallContainer, h1, tag, cover, content } = styles;

const Post = ({ data }) => {
  const {
    html,
    timeToRead,
    frontmatter: { slug, summary, title, updatedAt, tags, thumb },
  } = data.markdownRemark;
  const image = getImage(thumb);
  return (
    <>
      <Helmet>
        <title>{`${title} | Muhammad Haris`}</title>
        <meta name="description" content={summary} />
      </Helmet>
      <Layout socials={false}>
        <main className={main}>
          <Container maxWidth="800px">
            <div className={smallContainer}>
              <span>{updatedAt}</span>
              <span>{timeToRead} mins Read</span>
            </div>
            <h1 className={h1}>{title}</h1>
            <div className={smallContainer}>
              {tags?.map((t, i) => (
                <span key={i} className={tag}>
                  {t}
                </span>
              ))}
            </div>
            <GatsbyImage className={cover} image={image} alt="" />
            <section
              className={content}
              dangerouslySetInnerHTML={{ __html: html }}
            ></section>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        summary
        title
        thumb {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        updatedAt(formatString: "MMMM DD, YYYY")
        tags
      }
      html
      timeToRead
    }
  }
`;

export default Post;
