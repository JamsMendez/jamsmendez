export default function Me() {
  return (
    <section id="section-me" class="profile" aria-labelledby="profile-name">
      <div class="profile__copy">
        <h1 id="profile-name">Jose Ángel Méndez Santiago</h1>
        <h2>Desarrollador Backend</h2>
        <p class="profile__tagline">
          Soy un desarrollador que hace cosas al escribir código 🐈
        </p>
        <p>
          Desarrollador Backend con experiencia en Go, aplicaciones full stack,
          bases de datos e integración de inteligencia artificial.
        </p>
        <address>
          <a href="mailto:jamsmendez02@gmail.com">jamsmendez02@gmail.com</a>
          <a href="tel:+529211804060">(+52) 921 180 40 60</a>
        </address>
      </div>
      <img
        class="profile__portrait"
        src="/images/jamsmendez.jpeg"
        height="150"
        width="150"
        alt="Retrato de Jose Ángel Méndez Santiago"
      />
    </section>
  );
}
