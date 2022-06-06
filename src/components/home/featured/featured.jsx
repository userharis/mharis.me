import SectionLabel from "../sectionLabel";
import projects from "./data";
import * as styles from "../../../styles/home/home.module.css";

const { project } = styles;

const Featured = () => {
  return (
    <section>
      <SectionLabel>Featured Projects</SectionLabel>
      {projects.map((p, i) => {
        return (
          <article className={project}>
            <header>
              <h3>{p.title}</h3>
              {p.status === "under construction" && (
                <span>Under Construction</span>
              )}
            </header>
            <p>{p.description}</p>
            <a href={p.url}>Visit Live</a>
          </article>
        );
      })}
    </section>
  );
};

export default Featured;
