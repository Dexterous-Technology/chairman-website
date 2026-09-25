import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpDown,
  HelpCircle,
  LayoutGrid,
  Plug,
  Rows3,
  Search,
  Settings2,
  SlidersHorizontal,
  Weight,
  X,
  Zap,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BATTERIES, RANGES, type Battery } from "@/lib/catalog";
import logo from "@/assets/chairman-logo.jpg.asset.json";
import { ConcordeTopBar } from "@/components/ConcordeBar";
import { SiteNav } from "@/components/SiteNav";
import { HeaderActions } from "@/components/HeaderActions";
import { SiteFooter } from "@/components/SiteFooter";
import { getBatteryProductImage } from "@/lib/battery-images";

export const Route = createFileRoute("/find-your-battery")({
  head: () => ({
    meta: [
      { title: "Find Your Battery | Chairman Battery AGM Catalog Search" },
      {
        name: "description",
        content:
          "Search and filter the full Chairman AGM battery catalog by part number, voltage, capacity, weight and dimensions to find the right part number for your system.",
      },
      { property: "og:title", content: "Find Your Battery | Chairman Battery" },
      {
        property: "og:description",
        content:
          "Technical parts lookup for Chairman AGM deep-cycle batteries: filter by voltage, capacity, weight and dimensions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FinderPage,
});

const VOLTS = [2, 6, 12] as const;

const VOLT_OPTIONS: { label: string; value: number | null }[] = [
  { label: "All Voltages", value: null },
  { label: "2V", value: 2 },
  { label: "6V", value: 6 },
  { label: "12V", value: 12 },
];

const inMm = (v: number) => `${v.toFixed(2)} / ${Math.round(v * 25.4)}`;
const lbKg = (v: number) => `${v} / ${Math.round(v * 0.4536)}`;

type SortKey = "part" | "volts" | "l" | "w" | "h" | "weight" | "cap20" | "cap100";

const defaultRanges = () => ({
  weight: [...RANGES.weight] as [number, number],
  capacity: [...RANGES.capacity] as [number, number],
  length: [...RANGES.length] as [number, number],
  width: [...RANGES.width] as [number, number],
  height: [...RANGES.height] as [number, number],
});

function FinderPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [volt, setVolt] = useState<number | null>(null);
  const [ranges, setRanges] = useState(defaultRanges);
  const [perPage, setPerPage] = useState(30);
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "table">("grid");
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "part", dir: 1 });

  // Debounce keyword so filtering doesn't run on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  const results = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    const list = BATTERIES.filter((b) => {
      if (q && !b.part.toLowerCase().includes(q)) return false;
      if (volt !== null && b.volts !== volt) return false;
      if (b.weight < ranges.weight[0] || b.weight > ranges.weight[1]) return false;
      if (b.cap20 < ranges.capacity[0] || b.cap20 > ranges.capacity[1]) return false;
      if (b.l < ranges.length[0] || b.l > ranges.length[1]) return false;
      if (b.w < ranges.width[0] || b.w > ranges.width[1]) return false;
      if (b.h < ranges.height[0] || b.h > ranges.height[1]) return false;
      return true;
    });
    return list.sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (typeof av === "string" && typeof bv === "string") return av.localeCompare(bv) * sort.dir;
      return ((av as number) - (bv as number)) * sort.dir;
    });
  }, [debouncedQuery, volt, ranges, sort]);

  const visible = results.slice(0, perPage * page);

  const resetAll = () => {
    setRanges(defaultRanges());
    setVolt(null);
    setQuery("");
    setPage(1);
  };

  const fmt = (v: number) => (v % 1 !== 0 ? v.toFixed(1) : `${v}`);

  type AppliedFilter = { key: string; label: string; onRemove: () => void };
  const appliedFilters: AppliedFilter[] = [];
  if (debouncedQuery.trim()) {
    appliedFilters.push({
      key: "keyword",
      label: `Keyword: ${debouncedQuery.trim()}`,
      onRemove: () => {
        setQuery("");
        setPage(1);
      },
    });
  }
  if (volt !== null) {
    appliedFilters.push({
      key: "volt",
      label: `Voltage: ${volt}V`,
      onRemove: () => {
        setVolt(null);
        setPage(1);
      },
    });
  }
  const rangeDefs: { key: keyof typeof ranges; label: string; unit: string }[] = [
    { key: "weight", label: "Weight", unit: "lbs" },
    { key: "capacity", label: "Capacity", unit: "Ah" },
    { key: "length", label: "Length", unit: "in" },
    { key: "width", label: "Width", unit: "in" },
    { key: "height", label: "Height", unit: "in" },
  ];
  for (const rd of rangeDefs) {
    const bounds = RANGES[rd.key];
    const val = ranges[rd.key];
    if (val[0] !== bounds[0] || val[1] !== bounds[1]) {
      appliedFilters.push({
        key: rd.key,
        label: `${rd.label}: ${fmt(val[0])}–${fmt(val[1])} ${rd.unit}`,
        onRemove: () => {
          setRanges((r) => ({ ...r, [rd.key]: [...bounds] as [number, number] }));
          setPage(1);
        },
      });
    }
  }

  const filterPanel = (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        <RangeControl
          label="Weight Range (lbs)"
          bounds={RANGES.weight}
          value={ranges.weight}
          onChange={(v) => setRanges((r) => ({ ...r, weight: v }))}
        />
        <RangeControl
          label="Capacity Range (Ah)"
          bounds={RANGES.capacity}
          value={ranges.capacity}
          onChange={(v) => setRanges((r) => ({ ...r, capacity: v }))}
        />
        <RangeControl
          label="Length Range (in)"
          bounds={RANGES.length}
          step={0.1}
          value={ranges.length}
          onChange={(v) => setRanges((r) => ({ ...r, length: v }))}
        />
        <RangeControl
          label="Width Range (in)"
          bounds={RANGES.width}
          step={0.1}
          value={ranges.width}
          onChange={(v) => setRanges((r) => ({ ...r, width: v }))}
        />
        <RangeControl
          label="Height Range (in)"
          bounds={RANGES.height}
          step={0.1}
          value={ranges.height}
          onChange={(v) => setRanges((r) => ({ ...r, height: v }))}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConcordeTopBar />
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-[0_6px_24px_-14px_rgba(1,22,137,0.55)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center">
            <img
              src={logo.url}
              alt="Chairman Battery — the heart of your system"
              className="h-8 w-auto shrink-0 sm:h-10 dark:invert dark:hue-rotate-180"
              width={220}
              height={40}
            />
          </Link>
          <SiteNav />
          <HeaderActions />
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">Find Your Battery</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Search by part number or specification to find the right Chairman AGM battery for your system.
        </p>

        {/* search row */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search by part number, model, or keyword (e.g. AGM-1265T, wheelchair, forklift)"
              className="h-12 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <select
            value={volt ?? ""}
            onChange={(e) => {
              setVolt(e.target.value === "" ? null : Number(e.target.value));
              setPage(1);
            }}
            className="h-12 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-accent"
          >
            {VOLT_OPTIONS.map((opt) => (
              <option key={opt.label} value={opt.value ?? ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <Sheet>
            <SheetTrigger className="h-12 rounded-md border border-primary/40 px-4 text-sm font-semibold text-primary lg:hidden">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </span>
            </SheetTrigger>
            <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="p-4">{filterPanel}</div>
            </SheetContent>
          </Sheet>
        </div>

        {/* filter panel */}
        <div className="mt-4 hidden rounded-lg border border-border bg-surface p-5 lg:block">{filterPanel}</div>

        {/* applied filters */}
        {appliedFilters.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Applied Filters</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {appliedFilters.map((f) => (
                <span
                  key={f.key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 py-1 pl-3 pr-2 text-xs font-medium text-primary"
                >
                  {f.label}
                  <button
                    onClick={f.onRemove}
                    aria-label={`Remove filter: ${f.label}`}
                    className="rounded-full p-0.5 text-primary/70 transition hover:bg-accent/30 hover:text-primary"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={resetAll}
                className="text-xs font-semibold text-accent underline-offset-2 transition hover:underline"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* toolbar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-border py-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Showing all results</span>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setPage(1);
              }}
              className="rounded-md border border-input bg-background px-2 py-1 text-sm"
              aria-label="Results per page"
            >
              {[10, 30, 60].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span className="font-semibold text-foreground">
              {visible.length} of {results.length} visible
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-md border border-primary/40 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5">
              <HelpCircle className="h-4 w-4" /> Show me around
            </button>
            <div className="flex overflow-hidden rounded-md border border-border">
              <button
                aria-label="Grid view"
                onClick={() => setView("grid")}
                className={`p-2 ${view === "grid" ? "bg-accent text-brand-foreground" : "text-muted-foreground"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                aria-label="Table view"
                onClick={() => setView("table")}
                className={`p-2 ${view === "table" ? "bg-accent text-brand-foreground" : "text-muted-foreground"}`}
              >
                <Rows3 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No batteries match these filters. Try widening a range or resetting filters.
          </p>
        ) : view === "grid" ? (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
            {visible.map((b) => (
              <BatteryCard key={b.part} b={b} />
            ))}
          </div>
        ) : (
          <ResultsTable rows={visible} sort={sort} setSort={setSort} />
        )}

        {visible.length < results.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-background"
            >
              Load More Results
            </button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function RangeControl({
  label,
  bounds,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  bounds: [number, number];
  value: [number, number];
  onChange: (v: [number, number]) => void;
  step?: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        <Popover>
          <PopoverTrigger aria-label={`Edit ${label}`} className="text-muted-foreground hover:text-primary">
            <Settings2 className="h-3.5 w-3.5" />
          </PopoverTrigger>
          <PopoverContent className="w-56 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={value[0]}
                onChange={(e) => onChange([Number(e.target.value), value[1]])}
                className="w-full rounded-md border border-input px-2 py-1 text-sm"
                aria-label="Minimum"
              />
              <span className="text-muted-foreground">—</span>
              <input
                type="number"
                value={value[1]}
                onChange={(e) => onChange([value[0], Number(e.target.value)])}
                className="w-full rounded-md border border-input px-2 py-1 text-sm"
                aria-label="Maximum"
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-3 flex justify-between text-xs font-semibold text-primary">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
      <Slider
        className="mt-1"
        min={bounds[0]}
        max={bounds[1]}
        step={step}
        value={value}
        onValueChange={(v) => onChange([v[0] ?? bounds[0], v[1] ?? bounds[1]])}
      />
    </div>
  );
}

function BatteryCard({ b }: { b: Battery }) {
  return (
    <Link
      to="/products/$part"
      params={{ part: b.part }}
      className="card-lift block overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative aspect-square bg-surface">
        <img
          src={getBatteryProductImage(b.part)}
          alt={`${b.part} AGM battery`}
          loading="lazy"
          className="h-full w-full object-contain p-3"
        />
        {b.recommended ? (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-yellow px-2 py-1 text-[10px] font-bold text-yellow-ink">
            Best Match
          </span>
        ) : null}
      </div>
      <div className="p-3">
        <h3 className="font-display text-base font-bold text-primary">{b.part}</h3>
        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-accent" /> {b.volts} Volts
          </li>
          <li className="flex items-center gap-1.5">
            <Plug className="h-3.5 w-3.5 text-accent" /> {b.cap20} Ah
          </li>
          <li className="flex items-center gap-1.5">
            <Weight className="h-3.5 w-3.5 text-accent" /> {b.weight} lbs
          </li>
        </ul>
      </div>
    </Link>
  );
}

function ResultsTable({
  rows,
  sort,
  setSort,
}: {
  rows: Battery[];
  sort: { key: SortKey; dir: 1 | -1 };
  setSort: (s: { key: SortKey; dir: 1 | -1 }) => void;
}) {
  const th = (key: SortKey, label: string) => (
    <button
      onClick={() => setSort({ key, dir: sort.key === key && sort.dir === 1 ? -1 : 1 })}
      className="flex items-center gap-1 whitespace-nowrap"
    >
      {label} <ArrowUpDown className="h-3 w-3 opacity-70" />
    </button>
  );

  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[900px] border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-brand text-brand-foreground">
          <tr>
            <th rowSpan={2} className="px-3 py-2 text-left font-bold">
              {th("part", "Battery Number")}
            </th>
            <th rowSpan={2} className="px-3 py-2 text-left font-bold">
              {th("volts", "Volts")}
            </th>
            <th colSpan={3} className="border-b border-brand-foreground/20 px-3 py-2 text-center font-bold">
              Overall Dimensions (in / mm)
            </th>
            <th rowSpan={2} className="px-3 py-2 text-left font-bold">
              {th("weight", "Unit Wt (Lbs / Kgs)")}
            </th>
            <th colSpan={2} className="border-b border-brand-foreground/20 px-3 py-2 text-center font-bold">
              Nominal Capacity (Ah)
            </th>
            <th rowSpan={2} className="px-3 py-2 text-left font-bold">
              View Details
            </th>
          </tr>
          <tr>
            <th className="px-3 py-2 text-left font-semibold">{th("l", "L")}</th>
            <th className="px-3 py-2 text-left font-semibold">{th("w", "W")}</th>
            <th className="px-3 py-2 text-left font-semibold">{th("h", "H")}</th>
            <th className="px-3 py-2 text-left font-semibold">{th("cap20", "20-hr¹")}</th>
            <th className="px-3 py-2 text-left font-semibold">{th("cap100", "Min @ 25A")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((b, i) => (
            <tr
              key={b.part}
              className={
                b.recommended ? "bg-yellow/25" : i % 2 === 1 ? "bg-surface" : "bg-background"
              }
            >
              <td className="px-3 py-2 font-semibold text-accent underline underline-offset-2">{b.part}</td>
              <td className="px-3 py-2">{b.volts}</td>
              <td className="px-3 py-2">{inMm(b.l)}</td>
              <td className="px-3 py-2">{inMm(b.w)}</td>
              <td className="px-3 py-2">{inMm(b.h)}</td>
              <td className="px-3 py-2">{lbKg(b.weight)}</td>
              <td className="px-3 py-2">{b.cap20}</td>
              <td className="px-3 py-2">{b.cap100}</td>
              <td className="px-3 py-2">
                <Link
                  to="/products/$part"
                  params={{ part: b.part }}
                  aria-label={`View details for ${b.part}`}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-primary hover:border-accent hover:text-accent"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-surface px-3 py-2 text-xs text-muted-foreground">
        ¹ 20-hour rate to 1.75 VPC at 77°F. ² 100-hour rate to 1.75 VPC at 77°F.
      </p>
    </div>
  );
}
