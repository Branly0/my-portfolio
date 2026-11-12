// components/ui/Copyright.tsx
import { site } from "@/data/site";

export default async function Copyright() {
  "use cache";
  return (
    <p className="text-sm text-neutral-500">
      © {new Date().getFullYear()} copyright
    </p>
  );
}