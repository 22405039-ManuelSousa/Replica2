import HeroScroll from "@/components/HeroScroll";
import ScrollContent from "@/components/ScrollContent";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-[#0f172a] min-h-screen">
      <FloatingNav />
      <div className="h-[400vh]">
        <HeroScroll />
        <ScrollContent />
      </div>
    </main>
  );
}
