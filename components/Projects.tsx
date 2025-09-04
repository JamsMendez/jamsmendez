import { type Project, Projects } from "./../routes/types.d.ts";

import Slideshow from "../islands/Slideshow.tsx";

interface ProjectsProps {
  data: Projects;
}

interface ProjectProps {
  data: Project;
}

const tecnology_icons: Record<string, string> = {
  Go:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
  React:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  Preact: "https://preactjs.com/branding/symbol.png",
  Docker:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  MongoDB:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  MySQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  Node:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  Android:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
  Kotlin: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  Firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  Flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  Dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  Raspberry:
    "https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Raspberry_Pi_Logo.svg/475px-Raspberry_Pi_Logo.svg.png?20120729132916",
};

export const ProjectsSection = ({ data }: ProjectsProps) => {
  return (
    <>
      <h3 id="section-projects">{data.title}</h3>
      <div>
        {data.items.map((project) => <ProjectItem data={project} />)}
      </div>
    </>
  );
};

export const ProjectItem = ({ data }: ProjectProps) => {
  const {
    name,
    description,
    tecnologies = [],
    links = [],
    images = [],
    videos = [],
  } = data;
  return (
    <div>
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{name}</h4>
        <p>
          {description}{" "}
          {links.map((link) => (
            <a style={{ color: "#FFF" }} target="_blank" href={link.url}>
              {link.text}
            </a>
          ))}
        </p>
        <div class="flex flex-wrap justify-start items-center">
          {tecnologies.map((key: string) => (
            <img
              class="mb-4 mr-4 h-6 w-6 sm:h-10 sm:w-10"
              src={tecnology_icons[key]}
              alt={key}
            />
          ))}
        </div>
        {images.length > 0 && <Slideshow images={images} />}
        <div>
          {videos.map((video) => (
            <iframe
              width="100%"
              height="400"
              src={video}
              frameBorder={0}
              allow="autoplay; encrypted-media"
              allowFullScreen={true}
            >
            </iframe>
          ))}
        </div>
      </div>
    </div>
  );
};
