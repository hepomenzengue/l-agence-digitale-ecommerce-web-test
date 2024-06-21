import React, { useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickThumbnail = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="sm:w-1/5 space-y-3 sm:space-y-0 sm:space-x-3 flex flex-wrap">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-16 h-16 sm:w-12 sm:h-12 rounded-md cursor-pointer overflow-hidden ${
                index === currentIndex ? "border-2 border-green-600" : ""
              }`}
              onClick={() => handleClickThumbnail(index)}
            >
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className="sm:w-4/5">
          <Image
            src={images[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="w-full rounded-md object-cover"
            layout="responsive"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
