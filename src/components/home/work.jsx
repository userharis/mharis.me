import * as styles from "../../styles/home.module.css";

const {
  project,
  projectImage,
  projectTitle,
  projectTag,
  projectDesc,
  projectLink,
} = styles;

const WorkSection = () => {
  return (
    <section id="featured">
      {featuredWork.map((w, i) => {
        return (
          <article key={i} className={project}>
            <div>
              <small className={projectTag}>Featured Project</small>
              <h2 className={projectTitle}>{w.title}</h2>
              <p className={projectDesc}>{w.description}</p>
              <a href={w.url} className={projectLink}>
                view live
              </a>
            </div>
            <div className={projectImage}>
              <img src={w.logo} alt={w.title + " logo"} />
            </div>
          </article>
        );
      })}
    </section>
  );
};

const featuredWork = [
  {
    title: "Naasher",
    description:
      "Naasher is a social blogging platform built for Urdu Language. Users get a personalized feed, a nice block-styled rich text editor and the ability to connect custom domains.",
    logo: "/naasher-logo.svg",
    url: "https://naasher.social",
  },
  {
    title: "CodeNerdy",
    description:
      "CodeNerdy is a developer blog. It features content about web development, JavaScript and Go Programming.",
    logo: "/codenerdy.svg",
    url: "https://mharis.me/codenerdy",
  },
];

export default WorkSection;
