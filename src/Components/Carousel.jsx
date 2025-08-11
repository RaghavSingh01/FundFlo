import React, { useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';


const slides =  [
{id: 1, image: '../assets/generated-image.png', alt: 'Slide 1',text:'Hello'},
{ id: 2, image: '../assets/Untitled design (1).png', alt: 'Slide 2' , text: 'Hello'},
  { id: 3, image: '../assets/Invest.png', alt: 'Slide 3', text:'Hello' }
]


function Carousel({slides}){
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const timeoutRef = useRef(null);
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev === length - 1? 0: prev + 1))
        },5000);

        return () => {
            resetTimeout();
        }

    }, [current, length])


    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    const goToPrev = () => {
        setCurrent(current === 0? length - 1: current - 1)
    }

    const goToNext = () => {
        setCurrent(current === length - 1? 0: current + 1)
    }

    const goToSlide = (index) => {
        setCurrent(index);
    }

   return (
    <div className=" pl-1 pt-2 pr-2 relative w-full h-180 mx-auto overflow-hidden ">
      {/* Slides container */}
      <div
        className="flex  transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full">
            <Link to={slide.link} className="block ">
      <img
        src={slide.image}
        alt={slide.alt}
        className="w-full h-64 sm:h-80 md:h-155 object-cover"
      />
      </Link>
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h2 className="text-white text-3xl font-bold px-4 text-center">
        {slide.text}
      </h2>
    </div> */}
          </div>
        ))}
      </div>


      {/* Prev button */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800  bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 focus:outline-none"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 focus:outline-none"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-3 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              idx === current ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
