const Menu = () => (
  <div class="
      flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0
      ">
    <a
      href={`https://github.com/JamsMendez`}
      target="_blank"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src={`/images/github.svg`}
        class="
          w-full h-full transition-colors duration-150"
        alt="Github icon"
      />
    </a>
    <a
      href={`https://drive.google.com/drive/folders/0B6igrDKzloXEUlh0TGdXWFV0Njg?resourcekey=0-W0L0s9wjMOzvnjMtsNlPHQ&usp=share_link`}
      target="_blank"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src={`/images/certification-files.svg`}
        class="
          w-full h-full transition-colors duration-150"
        alt="certification files icon"
      />
    </a>
    <a
      href={``}
      target="_blank"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src={`/images/pdf.svg`}
        class="
          w-full h-full transition-colors duration-150"
        alt="PDF icon"
      />
    </a>

  </div>
);
export default Menu;
