import { useStaticQuery, graphql, Link } from "gatsby";
import SectionLabel from "../sectionLabel";
import * as styles from "../../../styles/home/home.module.css";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___updatedAt, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            summary
            title
            updatedAt
          }
          fileAbsolutePath
          timeToRead
        }
      }
    }
  `);

  return (
    <section className={styles.blog}>
      <SectionLabel>Latest Articles</SectionLabel>
      {data.allMarkdownRemark.nodes.map((node, i) => {
        let { title, summary, updatedAt } = node.frontmatter;
        updatedAt = formatDate(updatedAt);
        return (
          <article>
            <div>
              <span>{updatedAt}</span>
              <span>{node.timeToRead} mins Read</span>
            </div>
            <h3>{title}</h3>
            <p>{summary}</p>
            <Link to={getSlug(node.fileAbsolutePath)}>Read More</Link>
          </article>
        );
      })}
    </section>
  );
};

function formatDate(date) {
  date = new Date(date);
  const FormatObject = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  date = FormatObject.format(date);
  return date;
}

function getSlug(fileAbsolutePath) {
  return "/maniac/" + fileAbsolutePath.split("/").pop().split(".")[0];
}

export default Blog;
