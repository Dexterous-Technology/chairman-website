import { useEffect, useState } from "react";
import { BATTERIES, type Battery } from "./catalog";

function shuffle(source: Battery[]): Battery[] {
  const a = [...source];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

/**
 * Returns `count` batteries picked from the catalog, reshuffled on every page
 * load. The first render (SSR + hydration) uses a stable slice so markup
 * matches, then the shuffled selection is applied after mount.
 */
export function useRandomBatteries(count = 8): Battery[] {
  const [list, setList] = useState<Battery[]>(() => BATTERIES.slice(0, count));

  useEffect(() => {
    setList(shuffle(BATTERIES).slice(0, count));
  }, [count]);

  return list;
}

export const batterySpecLabel = (b: Battery) => `${b.volts}V · ${b.cap20} Ah`;
