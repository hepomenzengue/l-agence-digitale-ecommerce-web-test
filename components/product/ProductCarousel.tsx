import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getTopsCategories } from "../../api/api";

interface ImageData {
  images: string[];
  title: string;
  price: string;
}

const BannerCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 500); // Durée de la transition (500 ms)
  };

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 500); // Durée de la transition (500 ms)
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(false);
      }, 500); // Durée de la transition (500 ms)
    }, 5000); // Changement d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    getTopsCategories()
      .then((data) => {
        setImages(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(
          "Erreur lors de la récupération des données :",
          error.message
        );
      });
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="relative w-full md:w-1/2 bg-gray-200 mx-auto md:rounded-lg">
      {/* Carousel Container */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:rounded-lg overflow-hidden"
        style={{
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          maxHeight: "500px", // Hauteur maximale pour l'image
        }}
      >
        {/* Image */}
        <Image
          src={images[currentImageIndex].images[0]}
          alt={images[currentImageIndex].title}
          className={`object-contain w-full h-full md:ml-32 transition-opacity duration-500 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            maxHeight: "100%", // Assure que l'image occupe toute la hauteur du conteneur
            width: "auto", // Pour ajuster la largeur automatiquement en fonction de la hauteur
          }}
          width={100}
          height={100}
          layout="responsive"
        />

        {/* Overlay */}
        <div className="absolute p-8 md:p-16 inset-0 flex flex-col justify-center items-center md:items-end text-left text-white bg-gray-900 bg-opacity-50 transition-opacity duration-300 md:order-1 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {images[currentImageIndex].title}
          </h2>
          <p className="text-md md:text-2xl mb-6">
            {`${images[currentImageIndex].price} CFA`}
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600">
            Consulter le produit
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-600 hover:bg-green-700 text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="p-2 bg-gray-600 hover:bg-green-700 text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;
