const menuItems = [
  {
    href: "https://github.com/JamsMendez",
    icon: "/images/github.svg",
    label: "Perfil de GitHub de JamsMendez",
  },
  {
    href:
      "https://drive.google.com/drive/folders/0B6igrDKzloXEUlh0TGdXWFV0Njg?resourcekey=0-W0L0s9wjMOzvnjMtsNlPHQ&usp=share_link",
    icon: "/images/certification-files.svg",
    label: "Archivos de certificaciones",
  },
  {
    href: "/jamsmendez-cv.pdf",
    icon: "/images/pdf.svg",
    label: "Currículum de Jose Ángel Méndez Santiago en PDF",
  },
];

export default function Menu() {
  return (
    <nav class="quick-links" aria-label="Enlaces principales">
      {menuItems.map((item) => (
        <a
          class="quick-links__item"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <img src={item.icon} alt="" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
