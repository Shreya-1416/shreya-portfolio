import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  target,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-black text-white hover:-translate-y-1 hover:shadow-lg"
          : "border border-neutral-300 bg-white hover:bg-neutral-100"
      )}
    >
      {children}
    </Link>
  );
}