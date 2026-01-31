import Collection from "@/components/Collection";
import FloatingNav from "@/components/FloatingNav";

export default function CollectionPage() {
    return (
        <main className="relative bg-[#0f172a] min-h-screen">
            <FloatingNav />
            <Collection />
        </main>
    );
}
