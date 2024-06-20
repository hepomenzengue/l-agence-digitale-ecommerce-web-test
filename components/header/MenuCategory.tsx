// Importing React, useState, useEffect
import React, { useState, useEffect } from "react";
import { getCategories } from "../../api/api";
import Link from "next/link";

type Category = {
  name: string;
  slug: string;
};

// Functional component MenuCategory
function MenuCategory() {
  // State to manage dropdown open/close
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    // function handle closing dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("mega-menu-dropdown-button");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Event listener for mousedown event
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // JSX for MenuCategory component
  return (
    <div className="relative hidden md:block">
      {/* Dropdown Button */}
      <button
        id="mega-menu-dropdown-button"
        data-dropdown-toggle="mega-menu-dropdown"
        onClick={toggleDropdown}
        onMouseEnter={toggleDropdown}
        disabled={loading}
        className={`text-white font-semibold bg-white hover:bg-green-500 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-400 dark:focus:bg-green-500 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="button"
      >
        {loading
          ? "Chargement des catégories..."
          : "Sélectionnez une catégorie"}
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="mega-menu-dropdown"
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } absolute z-10 mt-2 w-full max-w-3xl px-2 py-3 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 md:px-0 md:py-0 md:mt-0 md:border-0 md:shadow-none dark:bg-gray-800`}
        style={{ minWidth: "700px" }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-50">
          {categories.map((category: Category) => (
            <div
              key={category.slug}
              className="p-4 pb-0 text-gray-900 dark:text-white"
            >
              <Link
                href={"#"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-green-600 dark:hover:text-white rounded-lg"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exporting the MenuCategory component as default
export default MenuCategory;
