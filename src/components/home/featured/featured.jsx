import SectionLabel from "../sectionLabel";
import projects from "./data";

const Featured = () => {
  return (
    <section>
      <SectionLabel>Featured Projects</SectionLabel>
      {projects.map((p, i) => {
        return (
          <article>
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
