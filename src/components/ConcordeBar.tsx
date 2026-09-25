import concordeLogo from "@/assets/concorde-logo.png";

export function ConcordeTopBar() {
  return (
    <div className="bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-1.5 lg:px-8">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
          Chairman Battery is a Concorde Battery Corporation company
        </span>
        <a
          href="https://www.concordebattery.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Concorde Battery Corporation"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          <img
            src={concordeLogo}
            alt="Concorde Battery Corporation"
            loading="lazy"
            width={1194}
            height={241}
            className="h-4 w-auto dark:brightness-0 dark:invert"
          />
        </a>
      </div>
    </div>
  );
}

export function ConcordeFooterCredit() {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs text-brand-foreground/60">
        Chairman Battery is proudly manufactured by Concorde Battery Corporation
      </p>
      <a
        href="https://www.concordebattery.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Concorde Battery Corporation"
        className="opacity-70 transition-opacity hover:opacity-100"
      >
        <img
          src={concordeLogo}
          alt="Concorde Battery Corporation"
          loading="lazy"
          width={1194}
          height={241}
          className="h-5 w-auto brightness-0 invert"
        />
      </a>
    </div>
  );
}
