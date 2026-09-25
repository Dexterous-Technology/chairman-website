import a1234 from "@/assets/outline-drawings/AGM-1234T.pdf.asset.json";
import a1240 from "@/assets/outline-drawings/AGM-1240T.pdf.asset.json";
import a1248 from "@/assets/outline-drawings/AGM-1248T.pdf.asset.json";
import a1255 from "@/assets/outline-drawings/AGM-1255T.pdf.asset.json";
import a1280 from "@/assets/outline-drawings/AGM-1280T.pdf.asset.json";
import a1285 from "@/assets/outline-drawings/AGM-1285T.pdf.asset.json";
import a12100 from "@/assets/outline-drawings/AGM-12100T.pdf.asset.json";
import a12105 from "@/assets/outline-drawings/AGM-12105T.pdf.asset.json";
import a12105tg from "@/assets/outline-drawings/AGM-12105TG_Rev_B.pdf.asset.json";
import a12148 from "@/assets/outline-drawings/AGM-12148T.pdf.asset.json";
import a12210 from "@/assets/outline-drawings/AGM-12210.pdf.asset.json";
import a12255 from "@/assets/outline-drawings/AGM-12255.pdf.asset.json";
import a6100 from "@/assets/outline-drawings/AGM-6100T.pdf.asset.json";
import a6220 from "@/assets/outline-drawings/AGM-6220T.pdf.asset.json";
import a6300 from "@/assets/outline-drawings/AGM-6300T.pdf.asset.json";
import a6400 from "@/assets/outline-drawings/AGM-6400HT.pdf.asset.json";
import a2660 from "@/assets/outline-drawings/AGM-2660T.pdf.asset.json";
import a2900 from "@/assets/outline-drawings/AGM-2900T.pdf.asset.json";
import a21200 from "@/assets/outline-drawings/AGM-21200HT.pdf.asset.json";

const OUTLINE_DRAWINGS: Record<string, string> = {
  "AGM-1234T": a1234.url,
  "AGM-1240T": a1240.url,
  "AGM-1248T": a1248.url,
  "AGM-1255T": a1255.url,
  "AGM-1265T": a1280.url,
  "AGM-1280T": a1280.url,
  "AGM-1285T": a1285.url,
  "AGM-12100T": a12100.url,
  "AGM-12105T": a12105.url,
  "AGM-12105TG": a12105tg.url,
  "AGM-12148T": a12148.url,
  "AGM-12210L": a12210.url,
  "AGM-12255L": a12255.url,
  "AGM-6100T": a6100.url,
  "AGM-6220T": a6220.url,
  "AGM-6300T": a6300.url,
  "AGM-6400HT": a6400.url,
  "AGM-2660T": a2660.url,
  "AGM-2900T": a2900.url,
  "AGM-21200HT": a21200.url,
};

export function getOutlineDrawing(part: string): string | undefined {
  return OUTLINE_DRAWINGS[part.toUpperCase()];
}
