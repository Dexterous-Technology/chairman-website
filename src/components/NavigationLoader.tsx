import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function NavigationLoader() {
  const isLoading = useRouterState({ select: (state) => state.status === "pending" });
  const locationHref = useRouterState({ select: (state) => state.location.href });
  const [linkLoading, setLinkLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const next = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      const isInternalPageChange =
        next.origin === current.origin &&
        (next.pathname !== current.pathname || next.search !== current.search);
      if (isInternalPageChange) setLinkLoading(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    setLinkLoading(false);
  }, [locationHref]);

  useEffect(() => {
    const updateHeaderBottom = () => {
      const header = document.querySelector("header");
      const bottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
      document.documentElement.style.setProperty("--navigation-header-bottom", `${bottom}px`);
    };

    updateHeaderBottom();
    window.addEventListener("resize", updateHeaderBottom);
    window.addEventListener("scroll", updateHeaderBottom, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeaderBottom);
      window.removeEventListener("scroll", updateHeaderBottom);
    };
  }, []);

  const pending = isLoading || linkLoading;

  useEffect(() => {
    if (pending) {
      setVisible(true);
      return;
    }

    const timeout = window.setTimeout(() => setVisible(false), 180);
    return () => window.clearTimeout(timeout);
  }, [pending]);

  useEffect(() => {
    if (!pending) {
      setShowSpinner(false);
      return;
    }

    const timeout = window.setTimeout(() => setShowSpinner(true), 160);
    return () => window.clearTimeout(timeout);
  }, [pending]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-[var(--navigation-header-bottom)] z-[60]" aria-live="polite" aria-label="Loading page">
      <div className="h-0.5 w-full overflow-hidden bg-accent/20">
        <div className="navigation-progress h-full bg-accent" />
      </div>
      {showSpinner ? (
        <div className="fixed inset-x-0 top-[calc(var(--navigation-header-bottom)+2px)] bottom-0 flex items-center justify-center bg-background">
          <span className="navigation-spinner h-8 w-8 rounded-full border-2 border-accent/25 border-t-accent" />
          <span className="sr-only">Loading page</span>
        </div>
      ) : null}
    </div>
  );
}