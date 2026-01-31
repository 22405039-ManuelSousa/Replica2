import HomeContent from "@/components/Home";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-[#0f172a] min-h-screen">
      <FloatingNav />
      <HomeContent />
    </main>
  );
}
