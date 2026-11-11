import LeftPanel from "@/components/panels/LeftPanel";
import RightPanel from "@/components/panels/RightPanel";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[360px_1fr]">
      <aside className="lg:sticky lg:top-[-100vh] lg:h-[200vh] lg:self-start">
        <LeftPanel />
      </aside>
      <main className="py-10">
        <RightPanel />
      </main>
    </div>
  );
}