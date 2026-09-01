import { define } from "../utils.ts";

export default define.page(function App({ Component, state }) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portafolio de Jose Ángel Méndez Santiago, Desarrollador Web Full Stack."
        />
        <meta name="theme-color" content="#181a1b" />
        <title>{state.title ?? "JamsMendez - Web Developer"}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main class="portfolio-shell">
          <Component />
        </main>
      </body>
    </html>
  );
});
