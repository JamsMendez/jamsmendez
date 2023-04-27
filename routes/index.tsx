import Experience from "../components/Experience.tsx";
import Footer from "../components/Footer.jsx";
import Me from "../components/Me.tsx";
import Menu from "../components/Menu.tsx";
import { ProjectsSection } from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";

export default function Home() {
  const skills = {
    title: "Habilidades",
    sections: [
      {
        title: "Lenguajes de Programación",
        skills: ["Go", "Javascript", "Kotlin", "PHP"],
      },
      {
        title: "Frameworks y Librerias",
        skills: [
          "Echo",
          "Gin",
          "Fiber",
          "React",
          "Preact",
          "Vue",
          "Node.js",
          "Express",
          "Socket.IO",
          "Electron",
          "Laravel",
        ],
      },
      {
        title: "Más conocimientos",
        skills: [
          "Linux",
          "Docker",
          "SQL (MySQL, PostgreSQL)",
          "NoSQL (MongoDB)",
          "Android (Jetpack Compose, Flutter)",
          "C# .NET",
          "Java SE",
          "Git",
          "HTML/CSS",
        ],
      },
    ],
  };

  const experience = {
    title: "Experiencia",
    jobs: [
      {
        name: "Technotex S.A de C.V.",
        role: "Desarrollador Web Full Stack",
        date: "desde Septiembre 2017, México.",
        tasks: [
          "Desarrollador Front y Backend del Sistema de Monitoreo SCADA usando React.js, Go y Docker.",
          "Desarrollador de servicios, herramientas para la gestión del sistema, Aplicaciones e interfaces para unidades embebidas, dispositivos de adquisición de datos usando Go.",
          "Desarrollador de Aplicación Móvil para Android del sistema de Monitoreo SCADA usando Kotlin y Flutter.",
          "Administrador de base de datos en MySQL y PostgresSQL.",
          "Desarrollador Backend del sistema Web de Monitoreo SCADA de Django a Go usando Echo.",
          "Desarrollador de servicios con Node.js y MongoDB para procesar registros del sistema de Monitoreo SCADA.",
          "Desarrollador Frontend de Aplicación Web de sistema de Monitoreo SCADA usando React.js",
        ],
      },
      {
        name: "Desarrollo y Soluciones NextIO S.A. de C.V.",
        role: "Desarrollador de Software",
        tasks: [
          "Desarrollo del Front y Backend para Aplicaciones Web y API con Node.js para sistema de Monitoreo SCADA y Geolocalización en Real-Time.",
          "Desarrollo Móvil Android de Aplicaciones nativas con Java consumiendo APIs y Geolocalización.",
        ],
        date: "Diciembre 2014 - Agosto 2017, México.",
      },
      {
        name: "Dysco EP S.A de C.V.",
        role: "Desarrollador Web Full Stack",
        tasks: [
          "Desarrollador Full Stack para mantener el sistema principal de Monitoreo y Real-Time con Laravel, MySQL, MongoDB y Angular.js.",
          "Desarrollo del Frontend de una Aplicación Web migrando a Angular.js.",
          "Desarrollo del Frontend de Aplicación Web para el sistema principal de Monitoreo y Real-Time con Backbone.js.",
          "Desarrollo del Front y Backend de un sistema Web ERP para proceso de gestión empresarial como parte del cumplimiento de la certificación ISO 9001 usando Backbone.js, Node.js y MongoDB.",
        ],
        date: "Junio 2013 - Diciembre 2014, México",
      },
      {
        name: "Oficinas del IMSS Coatzacoalcos",
        role: "Desarrollador Java Desktop",
        tasks: [
          "Desarrollador de Aplicación de escritorio para optimizar y automatizar análisis de registros de una base de datos con generación de diversos reportes.",
        ],
        date: "2 Meses, 2011",
      },
    ],
  };

  const projects = {
    title: "Proyectos",
    items: [
      {
        name: "O&GM v4",
        description:
          "Oil and Gas Monitor, Sistema de servicio de Monitoreo de Variables Operativas Technotex S.A. de C.V.",
        tecnologies: ["Go", "React", "Preact", "MySQL", "MongoDB"],
        links: [
          {
            text: "Ver más ...",
            url:
              "https://technotex.com/servicios/desarrollo-de-software-para-telemetria-y-automatizacion",
          },
        ],
        images: [],
        videos: [],
      },
      {
        name: "GearsTracking",
        description: "Sistema de Geolocalización de vehículos",
        tecnologies: ["React", "Node", "MongoDB", "Android", "Kotlin"],
        links: [],
        images: [
          "/images/GearsTracking/GearsTracking-01.png",
          "/images/GearsTracking/GearsTracking-02.png",
          "/images/GearsTracking/GearsTracking-03.png",
          "/images/GearsTracking/GearsTracking-04.png",
        ],
        videos: [],
      },
      {
        name: "OGM Móvil",
        description: "Aplicación Android para O&GM v4",
        tecnologies: ["Android", "Dart", "Flutter"],
        links: [],
        images: [
          "/images/OGM-App/OGM-App-01.jpeg",
          "/images/OGM-App/OGM-App-02.jpeg",
          "/images/OGM-App/OGM-App-03.jpeg",
          "/images/OGM-App/OGM-App-04.jpeg",
          "/images/OGM-App/OGM-App-05.jpeg",
          "/images/OGM-App/OGM-App-06.jpeg",
        ],
        videos: [],
      },
      {
        name: "Ubikte",
        description: "Aplicación Android para geomarqueting digital dinámico",
        tecnologies: ["Android", "Kotlin", "Go", "MySQL"],
        links: [],
        images: [
          "/images/Ubikte/Ubikte-01.jpeg",
          "/images/Ubikte/Ubikte-02.jpeg",
          "/images/Ubikte/Ubikte-03.jpeg",
          "/images/Ubikte/Ubikte-04.jpeg",
        ],
        videos: [],
      },
      {
        name: "Quiz Halo",
        description:
          "Aplicación de Android de Quiz usando Jetpack Compose y Firebase.",
        tecnologies: ["Android", "Kotlin", "Firebase"],
        links: [],
        images: [
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Quiz.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Question.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Question_2.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Score.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Score2.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Score2.png",
          "https://raw.githubusercontent.com/JamsMendez/QuizHalo-Compose/main/screen/Ranking.png",
        ],
        videos: [],
      },
      {
        name: "Memory Game Halo",
        description: "Aplicación Android usando Jetpack Compose",
        tecnologies: ["Android", "Kotlin"],
        links: [],
        images: [
          "https://raw.githubusercontent.com/JamsMendez/MemoryGame-Compose/main/screen/menu.png",
          "https://raw.githubusercontent.com/JamsMendez/MemoryGame-Compose/main/screen/game_01.png",
          "https://raw.githubusercontent.com/JamsMendez/MemoryGame-Compose/main/screen/game_02.png",
        ],
        videos: [],
      },
      {
        name: "encuentrOS",
        description: "Aplicación Android de una Revista Digital",
        tecnologies: ["Android", "Kotlin", "Go", "MongoDB"],
        links: [],
        images: [
          "/images/EncuentrOS/encuentrOS-01.png",
          "/images/EncuentrOS/encuentrOS-02.png",
          "/images/EncuentrOS/encuentrOS-03.png",
        ],
        videos: [],
      },
      {
        name: "Dispositivo GPS",
        description: "Prototipo de dispositivo GPS usando IoT",
        tecnologies: ["Go", "Raspberry"],
        links: [],
        images: [],
        videos: ["https://www.youtube.com/embed/d_-_6O-vyqM"],
      },
    ],
  };

  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu />
      <Me />
      <Skills data={skills} />
      <Experience data={experience} />
      <ProjectsSection data={projects} />
      <Footer />
    </div>
  );
}
