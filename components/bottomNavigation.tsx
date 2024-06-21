import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavigationButton from "./bottomNavigation/NavigationButton";

type IsActiveProps = {
  buttonClass: string;
  svgClass: string;
  spanClass: string;
};

const BottomNavigation = () => {
  const pathname = usePathname();

  // Utiliser un state pour suivre l'onglet actif
  const [activePath, setActivePath] = useState<string>(pathname);

  // Mettre à jour l'état de l'onglet actif lorsque le pathname change
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActivePath = (path: string[]): boolean => {
    for (let i = 0; i < path.length; i++) {
      if (
        (activePath.startsWith(path[i]) &&
          activePath.substring(0, path[i].length) === path[i] &&
          path[i].length > 1) ||
        activePath === path[i]
      ) {
        return true;
      }
    }
    return false;
  };

  // Fonction pour déterminer si un bouton de navigation est actif
  const isActive = (path: string[]): IsActiveProps => {
    return isActivePath(path)
      ? {
          buttonClass: "bg-green-600",
          svgClass: "text-white",
          spanClass: "text-white",
        }
      : {
          buttonClass: "hover:bg-gray-50 dark:hover:bg-gray-600",
          svgClass: "group-hover:text-white dark:group-hover:text-white",
          spanClass: "group-hover:text-white dark:group-hover:text-white",
        };
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-white dark:border-white mt-32">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <NavigationButton
          isActive={isActive(["/"])}
          label="Accueil"
          viewBox="0 0 20 20"
          svgPath={
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          }
          path="/"
        />
        <NavigationButton
          isActive={isActive([
            "/categories",
            "/products",
            "/productoverview",
            "/cart",
          ])}
          label="Boutique"
          viewBox="0 0 372.372 372.372"
          svgPath={
            <>
              <path
                d="M368.712,219.925c-5.042-8.951-14.563-14.511-24.848-14.511c-4.858,0-9.682,1.27-13.948,3.672l-83.024,46.756
		c-1.084,0.61-1.866,1.642-2.163,2.85c-1.448,5.911-4.857,14.164-12.865,19.911c-8.864,6.361-20.855,7.686-35.466,3.939
		c-0.088-0.022-0.175-0.047-0.252-0.071L148.252,267.6c-2.896-0.899-4.52-3.987-3.621-6.882c0.72-2.316,2.83-3.872,5.251-3.872
		c0.55,0,1.101,0.084,1.634,0.249l47.645,14.794c0.076,0.023,0.154,0.045,0.232,0.065c11.236,2.836,20.011,2.047,26.056-2.288
		c7.637-5.48,8.982-15.113,9.141-16.528c0.006-0.045,0.011-0.09,0.014-0.136c0.003-0.023,0.004-0.036,0.005-0.039
		c0.001-0.015,0.002-0.03,0.003-0.044c0.001-0.01,0.001-0.019,0.002-0.029c0.909-11.878-6.756-22.846-18.24-26.089l-0.211-0.064
		c-0.35-0.114-35.596-11.626-58.053-18.034c-2.495-0.711-9.37-2.366-19.313-2.366c-13.906,0-34.651,3.295-54.549,19.025
		L1.67,292.159c-1.889,1.527-2.224,4.278-0.758,6.215l44.712,59.06c0.725,0.956,1.801,1.584,2.99,1.744
		c0.199,0.027,0.398,0.04,0.598,0.04c0.987,0,1.954-0.325,2.745-0.935l57.592-44.345c1.294-0.995,3.029-1.37,4.619-0.995
		l93.02,21.982c6.898,1.63,14.353,0.578,20.523-2.9l130.16-73.304C371.555,251.012,376.418,233.61,368.712,219.925z"
              />
              <path
                d="M316.981,13.155h-170c-5.522,0-10,4.477-10,10v45.504c0,5.523,4.478,10,10,10h3.735v96.623c0,5.523,4.477,10,10,10h142.526
		c5.523,0,10-4.477,10-10V78.658h3.738c5.522,0,10-4.477,10-10V23.155C326.981,17.632,322.503,13.155,316.981,13.155z
		 M253.016,102.417h-42.072c-4.411,0-8-3.589-8-8c0-4.411,3.589-8,8-8h42.072c4.411,0,8,3.589,8,8
		C261.016,98.828,257.427,102.417,253.016,102.417z M306.981,58.658h-3.738H160.716h-3.735V33.155h150V58.658z"
              />
            </>
          }
          path="/categories"
        />
        <NavigationButton
          isActive={isActive(["/account"])}
          label="Compte"
          viewBox="0 0 20 20"
          svgPath={
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          }
          path="/account"
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
