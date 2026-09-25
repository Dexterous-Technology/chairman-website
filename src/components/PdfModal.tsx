import { useEffect, useState } from "react";
import { Download, ExternalLink, FileText, Loader2, X } from "lucide-react";

export type PdfModalProps = {
  title: string;
  url: string;
  onClose: () => void;
};

export function PdfModal({ title, url, onClose }: PdfModalProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="flex w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <p className="flex min-w-0 items-center gap-2 font-display text-sm font-bold text-primary sm:text-base">
            <FileText className="h-4 w-4 shrink-0 text-accent" />
            <span className="truncate">{title}</span>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/25 px-2.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-accent/10 sm:px-3"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Open in new tab</span>
            </a>
            <a
              href={url}
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/25 px-2.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-accent/10 sm:px-3"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close document preview"
              className="rounded-md border border-border p-1.5 text-foreground/70 transition-colors hover:bg-accent/10 hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative bg-surface">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="h-7 w-7 animate-spin text-accent" />
              Loading drawing…
            </div>
          )}
          <iframe
            src={url}
            title={title}
            onLoad={() => setLoading(false)}
            className="relative block h-[75vh] w-full sm:h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
}
