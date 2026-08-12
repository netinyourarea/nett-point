import logo from "@/assets/logo-net-point.png";

export function Logo({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={logo}
      alt="Net Point logo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`shrink-0 ${className}`}
    />
  );
}

export function Wordmark({ subtitle }: { subtitle?: string }) {
  return (
    <span className="min-w-0">
      <span className="block truncate font-display text-base leading-none font-semibold tracking-tight sm:text-lg">
        Net <span className="text-gradient">Point</span>
      </span>
      {subtitle && (
        <span className="mt-1 block truncate text-[10px] tracking-[0.28em] text-ivory/45 uppercase">
          {subtitle}
        </span>
      )}
    </span>
  );
}
