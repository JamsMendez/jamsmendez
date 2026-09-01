import type { Project, Projects as ProjectsData } from "../routes/types.ts";
import Slideshow from "../islands/Slideshow.tsx";

interface ProjectsProps {
  data: ProjectsData;
}

interface ProjectProps {
  data: Project;
}

const technologyIcons: Record<string, string> = {
  Go: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
  React:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  Preact: "https://preactjs.com/branding/symbol.png",
  Docker:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  MongoDB:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  MySQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  Node: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  Android:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
  Kotlin: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  Firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  Flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  Dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  Raspberry:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg",
  Laravel:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
};

export function ProjectsSection({ data }: ProjectsProps) {
  return (
    <section
      id="section-projects"
      class="content-section"
      aria-labelledby="projects-title"
    >
      <h3 id="projects-title" class="section-title">
        {data.title}
      </h3>
      <div class="section-body projects-list">
        {data.items.map((project) => (
          <ProjectItem key={project.name} data={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectItem({ data }: ProjectProps) {
  const { name, description, tecnologies, links, images, videos } = data;

  return (
    <article class="project-card">
      <h4>{name}</h4>
      <p>
        {description}{" "}
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </p>
      <ul class="technology-list" aria-label={`Tecnologías de ${name}`}>
        {tecnologies.map((technology) => (
          <li key={technology}>
            {technologyIcons[technology] ? (
              <img
                src={technologyIcons[technology]}
                alt={technology}
                title={technology}
                loading="lazy"
              />
            ) : (
              <span>{technology}</span>
            )}
          </li>
        ))}
      </ul>
      {images.length > 0 && <Slideshow images={images} projectName={name} />}
      {videos.map((video) => (
        <iframe
          key={video}
          class="project-video"
          src={video}
          title={`Video de ${name}`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ))}
    </article>
  );
}
