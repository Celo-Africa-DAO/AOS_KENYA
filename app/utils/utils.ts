/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DisplayContainerVariants = {
  hidden: {
    opacity: 0,
    x: 100, // Move the component right side by 100 units
  },
  visible: {
    opacity: 1,
    x: 0, // Move the component back to its initial position
    transition: { duration: 0.5 }, // Use a spring animation for smooth movement
  },
};
