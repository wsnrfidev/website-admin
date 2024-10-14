import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Formater = new Intl.NumberFormat("id-iD", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});
