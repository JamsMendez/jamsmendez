import { useState } from "preact/hooks";
import { tw } from "twind";

interface SlideProps {
  image: string;
}

interface SlideshowProps {
  images: string[];
}

const Slide = ({ image }: SlideProps) => {
  return (
    <div className={tw`flex justify-center items-center h-50`}>
      <img src={image} alt="" className={tw`object-cover h-50`} />
    </div>
  );
};

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className={tw`relative h-50 w-auto`}>
      <button
        style={{outline: "none"}}
        className={tw`absolute left-0 top-1/2 transform -translate-y-1/2 z-10`}
        onClick={goToPreviousSlide}
      >
        <svg
          fill="#FFFFFF"
          height="24px"
          width="24px"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915
			c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
			L168.837,256z" />
            </g>
          </g>
        </svg>
      </button>
      <button
        style={{outline: "none"}}
        className={tw`absolute right-0 top-1/2 transform -translate-y-1/2 z-10`}
        onClick={goToNextSlide}
      >
        <svg
          fill="#FFFFFF"
          height="24px"
          width="24px"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256
			L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667
			C396.749,262.754,396.749,249.246,388.418,240.915z" />
            </g>
          </g>
        </svg>
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={tw`${
            currentSlide === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 absolute inset-0`}
        >
          <Slide image={image} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
