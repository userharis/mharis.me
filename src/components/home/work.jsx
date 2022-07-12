import SectionLabel from "./sectionLabel";
import * as styles from "../../styles/home/work.module.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const {
  work,
  project,
  featuredTag,
  projectTitle,
  para,
  tagsContainer,
  linksContainer,
  projectAlternate,
} = styles;

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          url
          title
          tags
          repo
          description
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const { nodes } = data.allProjectsJson;

  return (
    <section className={work} id="work">
      <SectionLabel>Some Stuff I've Worked on</SectionLabel>
      {nodes.map((n, i) => {
        return <Project data={n} index={i} key={i} />;
      })}
    </section>
  );
};

const Project = ({ data, index }) => {
  let { title, description, tags, url, repo, image } = data;
  image = getImage(image);
  return (
    <article className={`${project} ${index % 2 !== 0 && projectAlternate}`}>
      <div>
        <span className={featuredTag}>Featured Project</span>
        <h3 className={projectTitle}>{title}</h3>
        <p className={para}>{description}</p>
        <div className={tagsContainer}>
          {tags.map((t) => {
            return <span>#{t}</span>;
          })}
        </div>
        <div className={linksContainer}>
          {repo && (
            <a href={repo} aria-label="Github Repository">
              <FiGithub />
            </a>
          )}
          <a href={url} aria-label="Project Link">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div>
        <GatsbyImage image={image} alt={`${title}'s screenshot`} />
      </div>
    </article>
  );
};

export default Work;
