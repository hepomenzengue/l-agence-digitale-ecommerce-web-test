import React from "react";
// useRouter
import { useRouter } from "next/navigation";

type IsActiveProps = {
  buttonClass: string;
  svgClass: string;
  spanClass: string;
};

interface NavigationButtonProps {
  isActive: IsActiveProps;
  label: string;
  viewBox: string;
  svgPath: React.ReactElement;
  path: string;
}
export default function NavigationButton({
  isActive,
  label,
  viewBox,
  svgPath,
  path,
}: NavigationButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(path);
      }}
      type="button"
      className={`inline-flex flex-col items-center justify-center px-5 ${isActive.buttonClass} group`}
    >
      <svg
        className={`w-5 h-5 mb-2 ${isActive.svgClass}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox={viewBox}
      >
        {svgPath}
      </svg>
      <span className={`font-semibold text-sm   ${isActive.spanClass}`}>
        {label}
      </span>
    </button>
  );
}
