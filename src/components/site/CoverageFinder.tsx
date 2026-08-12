import { useState } from "react";
import { Search, MapPin, CheckCircle2 } from "lucide-react";

export function CoverageFinder({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className={compact ? "" : "relative"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!query.trim()) return;
          setResult(query.trim());
        }}
        className="glass rounded-4xl p-5 sm:p-7"
      >
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 items-center gap-3 rounded-3xl border border-border bg-card px-4 py-3.5">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter ZIP code, city or locality"
              aria-label="ZIP code, city or locality"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-3xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Search className="h-4 w-4" /> Check Availability
          </button>
        </div>

        {result && (
          <div className="mt-4 flex items-start gap-3 rounded-3xl border border-mint/40 bg-mint/12 p-4 text-sm">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-foreground/80">
              Great news — connectivity options are typically available around{" "}
              <strong>{result}</strong>. Share your details and a specialist will confirm the exact
              broadband and cable options serviceable at your address.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Availability varies by address. A specialist confirms every result before any request is
          submitted.
        </p>
      </form>
    </div>
  );
}
