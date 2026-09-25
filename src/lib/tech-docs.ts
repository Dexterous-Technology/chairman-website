import ownersManual from "@/assets/Chairman_Owner_s_Manual.pdf.asset.json";
import technicalManual from "@/assets/chairman_Technical_Manual_PDF.pdf.asset.json";
import internalResistance from "@/assets/Internal_Resistance_Short_Circuit_Current.pdf.asset.json";
import electrolyte from "@/assets/Technical_Bulletin_-_Electrolyte_Content_PDF.pdf.asset.json";
import reach from "@/assets/EU_REACH_Regulation_-_Article_33_Compliance_PDF.pdf.asset.json";
import brochure from "@/assets/battery_brochure.pdf.asset.json";
import sds from "@/assets/battery_sds.pdf.asset.json";

export type TechDoc = {
  label: string;
  href: string;
  slug?: string;
  file?: string;
  description?: string;
};

export const TECH_DOCS: TechDoc[] = [
  {
    label: "Technical Bulletin - Electrolyte Content (PDF)",
    href: "/docs/electrolyte-content",
    slug: "electrolyte-content",
    file: electrolyte.url,
    description:
      "Chairman Battery technical bulletin covering electrolyte content of sealed AGM deep cycle batteries.",
  },
  {
    label: "Internal Resistance & Short Circuit Current (6-0108 Rev. B) (PDF)",
    href: "/docs/internal-resistance",
    slug: "internal-resistance",
    file: internalResistance.url,
    description:
      "Internal resistance and short circuit current data for Chairman AGM batteries, document 6-0108 Rev. B.",
  },
  {
    label: "Chairman® Technical Manual (PDF)",
    href: "/docs/technical-manual",
    slug: "technical-manual",
    file: technicalManual.url,
    description:
      "The complete Chairman Battery technical manual: construction, charging, testing and maintenance guidance.",
  },
  {
    label: "Chairman® Owner`s Manual (6-0105 Rev. B) (PDF)",
    href: "/docs/owners-manual",
    slug: "owners-manual",
    file: ownersManual.url,
    description:
      "Chairman Battery owner's manual, document 6-0105 Rev. B, with safe use, charging and storage instructions.",
  },
  {
    label: "Chairman® Battery SDS (PDF)",
    href: "/docs/safety-data-sheet",
    slug: "safety-data-sheet",
    file: sds.url,
    description:
      "Safety Data Sheet for Chairman sealed lead acid AGM batteries, including handling and first aid information.",
  },
  { label: "Chairman® Transportation Information", href: "/transportation" },
  {
    label: "Chairman® Battery Brochure (PDF)",
    href: "/docs/brochure",
    slug: "brochure",
    file: brochure.url,
    description:
      "Chairman Battery product brochure covering the AGM deep cycle battery range and specifications.",
  },
  {
    label: "Chairman® EU REACH Regulation - Article 33 Compliance (PDF)",
    href: "/docs/eu-reach-compliance",
    slug: "eu-reach-compliance",
    file: reach.url,
    description:
      "Chairman Battery EU REACH Regulation Article 33 compliance statement for substances of very high concern.",
  },
];

export const TECH_DOC_PAGES = TECH_DOCS.filter(
  (doc): doc is Required<Pick<TechDoc, "slug" | "file" | "label" | "href">> & TechDoc =>
    Boolean(doc.slug && doc.file),
);

export function getTechDoc(slug: string) {
  return TECH_DOC_PAGES.find((doc) => doc.slug === slug);
}
