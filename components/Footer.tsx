const socialLinks = [
  { href: "https://twitter.com/JamsMendez", label: "Twitter" },
  { href: "https://www.youtube.com/@JamsMendez", label: "Youtube" },
  {
    href: "https://www.linkedin.com/in/jams-mendez-b30613270",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer class="footer">
      <nav aria-label="Secciones del portafolio">
        <h4>Secciones</h4>
        <ul>
          <li>
            <a href="#section-me">Contáctame</a>
          </li>
          <li>
            <a href="#section-skills">Habilidades</a>
          </li>
          <li>
            <a href="#section-projects">Proyectos</a>
          </li>
        </ul>
      </nav>

      <div class="footer__badges">
        <a
          class="footer__github"
          href="https://github.com/JamsMendez"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Perfil de GitHub de JamsMendez"
        >
          <img src="/images/github.svg" alt="" aria-hidden="true" />
        </a>
        <a
          href="https://fresh.deno.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Hecho con Fresh"
          />
        </a>
      </div>

      <nav aria-label="Redes sociales">
        <h4>Sigueme!</h4>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
