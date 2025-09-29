1|import { clsx } from "clsx"
2|import { twMerge } from "tailwind-merge"
3|
4|export function cn(...inputs) {
5|  return twMerge(clsx(inputs))
6|}
