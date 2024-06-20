"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { getCategories } from "../../api/api";
import { useMediaQuery } from "../../utils/hooks";
import { useRouter } from "next/navigation";

type Category = {
  name: string;
  slug: string;
};

const Categories = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  if (isMdOrLarger) router.push("/");
  return (
    <div className="container mx-auto w-full h-full max-w-sm p-4 mb-40">
      <ul className="my-4 space-y-3">
        {loading ? (
          <>
            {Array.from({ length: 15 }, (_, index) => (
              <li key={index}>
                <div className="flex items-center p-3 text-base font-bold text-gray-500 rounded-bl-lg rounded-tl-none border-l border-b border-green-600 bg-white group hover:bg-white dark:bg-white dark:hover:bg-white dark:text-white">
                  <Skeleton
                    width={20}
                    height={20}
                    style={{ marginRight: "8px" }}
                  />
                  <Skeleton width={100} />
                </div>
              </li>
            ))}
          </>
        ) : (
          <>
            {categories.map((category: Category) => (
              <li key={category.slug}>
                <Link
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-500 rounded-bl-lg rounded-tl-none border-l border-b  border-green-600 bg-white hover:bg-white group hover:shadow dark:bg-white dark:hover:bg-white dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5  text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-600"
                    viewBox="0 0 370 370"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M366.85,71.242c-2.842-3.661-7.216-5.802-11.85-5.802H97.836L87.698,37.929c-2.173-5.896-7.791-9.813-14.075-9.813H15
		c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h48.165l85.384,231.704c2.173,5.897,7.791,9.814,14.075,9.814h147.823
		c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H173.082l-13.572-36.829h160.319c6.852,0,12.832-4.642,14.531-11.279L369.531,84.16
		C370.681,79.671,369.69,74.902,366.85,71.242z M262.435,153.141l-25.795,25.795c-2.833,2.833-6.6,4.393-10.606,4.393
		c-4.008,0-7.774-1.561-10.607-4.394l-25.792-25.794c-2.834-2.833-4.394-6.6-4.394-10.606c0-4.007,1.56-7.773,4.394-10.607
		c2.835-2.833,6.603-4.393,10.607-4.393c4.007,0,7.773,1.56,10.606,4.394l0.187,0.186V107.88c0-8.271,6.729-15,15-15
		c8.271,0,15,6.729,15,15v24.234l0.188-0.187c2.834-2.833,6.6-4.393,10.606-4.393s7.772,1.56,10.606,4.393
		C268.284,137.776,268.284,147.293,262.435,153.141z"
                    />
                    <path
                      d="M181.482,303.196c-10.687,0-19.347,8.658-19.347,19.344c0,10.686,8.66,19.344,19.347,19.344
		c10.686,0,19.347-8.659,19.347-19.344C200.829,311.854,192.169,303.196,181.482,303.196z"
                    />
                    <path
                      d="M282.311,303.196c-10.686,0-19.347,8.658-19.347,19.344c0,10.686,8.66,19.344,19.347,19.344s19.342-8.659,19.342-19.344
		C301.653,311.854,292.998,303.196,282.311,303.196z"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-600">
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Categories;
