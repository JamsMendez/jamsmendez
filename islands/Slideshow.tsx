import { useState } from "preact/hooks";

interface SlideshowProps {
  images: string[];
  projectName: string;
}

export default function Slideshow({ images, projectName }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideOrientations, setSlideOrientations] = useState<
    Record<number, "portrait" | "landscape">
  >({});
  const hasMultipleImages = images.length > 1;
  const currentOrientation = slideOrientations[currentSlide];

  const showPrevious = () => {
    setCurrentSlide((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentSlide((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div
      class="slideshow"
      role="region"
      aria-label={`Galería de ${projectName}`}
      aria-roledescription="carrusel"
    >
      <div
        class={`slideshow__stage ${
          currentOrientation ? `slideshow__stage--${currentOrientation}` : ""
        }`}
      >
        {images.map((image, index) => (
          <figure
            key={image}
            class={`slideshow__slide ${
              currentSlide === index ? "slideshow__slide--active" : ""
            }`}
            aria-hidden={currentSlide !== index}
          >
            <img
              src={image}
              alt={`${projectName}, imagen ${index + 1} de ${images.length}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              onLoad={(event) => {
                const { naturalHeight, naturalWidth } = event.currentTarget;
                const orientation = naturalHeight > naturalWidth
                  ? "portrait"
                  : "landscape";

                setSlideOrientations((orientations) =>
                  orientations[index] === orientation
                    ? orientations
                    : { ...orientations, [index]: orientation }
                );
              }}
            />
          </figure>
        ))}

        <button
          class="slideshow__control slideshow__control--previous"
          type="button"
          onClick={showPrevious}
          aria-label={`Mostrar imagen anterior de ${projectName}`}
          disabled={!hasMultipleImages}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          class="slideshow__control slideshow__control--next"
          type="button"
          onClick={showNext}
          aria-label={`Mostrar imagen siguiente de ${projectName}`}
          disabled={!hasMultipleImages}
        >
          <span aria-hidden="true">›</span>
        </button>

        <p class="slideshow__status" aria-live="polite" aria-atomic="true">
          <span aria-hidden="true">
            {currentSlide + 1} / {images.length}
          </span>
          <span class="sr-only">
            Imagen {currentSlide + 1} de {images.length}
          </span>
        </p>
      </div>
    </div>
  );
}
