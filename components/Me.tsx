export default function Me() {
  return (
    <section id="section-me" class="profile" aria-labelledby="profile-name">
      <div class="profile__copy">
        <h1 id="profile-name">Jose Ángel Méndez Santiago</h1>
        <h2>Desarrollador Web Full Stack</h2>
        <p>Soy un desarrollador que hace cosas al escribir código 🐈</p>
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
