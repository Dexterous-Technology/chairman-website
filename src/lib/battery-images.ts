import batteryViewOne from "@/assets/AGM-12105TG_1.jpg.asset.json";
import batteryViewTwo from "@/assets/AGM-12105TG_2.jpg.asset.json";
import batteryViewThree from "@/assets/AGM-12105TG_3.jpg.asset.json";

export const BATTERY_PRODUCT_IMAGES = [
  batteryViewOne.url,
  batteryViewTwo.url,
  batteryViewThree.url,
] as const;

export function getBatteryProductImage(partNumber: string) {
  const imageIndex = [...partNumber].reduce((total, character) => total + character.charCodeAt(0), 0) % BATTERY_PRODUCT_IMAGES.length;
  return BATTERY_PRODUCT_IMAGES[imageIndex] ?? BATTERY_PRODUCT_IMAGES[0];
}