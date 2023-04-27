const Me = () => (
  <div id="section-me" class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
    <div class="md:order-2">
      <h1>Jose Ángel Méndez Santiago</h1>
      <h2 class="my-1">Desarrollador Web Full Stack</h2>
      <p class="whitespace-pre-wrap">Soy un desarrollador que hace cosas al escribir código 🐈</p>
      <p class="whitespace-pre-wrap">
        <span style={{ color: "#FFFFFF", fontWeight: 400 }}>
          jamsmendez02@gmail.com
        </span>
        <br />
        <span style={{ color: "#FFFFFF", fontWeight: 400 }}>
          (+52) 921 180 40 60
        </span>
      </p>
    </div>
    <img
      class="rounded-full flex-shrink-0 md:order-1 md:w-8"
      src="images/jamsmendez.jpeg"
      height="150"
      width="150"
      alt="Portrait von Max Schmidt"
    />
  </div>
);

export default Me;
