import Link from "next/link";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ href, variant = "primary", children }: Props) {
  const base =
    "inline-block rounded-lg px-6 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500"
      : "border border-neutral-700 text-neutral-200 hover:bg-neutral-800";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}