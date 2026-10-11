import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-full bg-card ring-2 ring-gold/60 shadow-soft",
        className,
      )}
    >
      <img
        src={typeof logo === "string" ? logo : logo.src}
        alt="Sasyadhara Farms logo"
        width={640}
        height={640}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
