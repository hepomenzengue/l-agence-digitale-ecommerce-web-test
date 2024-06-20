import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden md:block bg-white rounded-lg shadow dark:bg-white m-4 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-green-600 sm:mx-auto dark:border-green-700 lg:my-8" />
        <span className="block text-sm text-gray-600 sm:text-center dark:text-gray-600">
          © 2024{" "}
          <a href="/" className="hover:underline">
            hepomenzengue
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
