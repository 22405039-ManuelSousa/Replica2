import ReviewsInfo from "@/components/ReviewsInfo";
import FloatingNav from "@/components/FloatingNav";

export default function InfoPage() {
    return (
        <main className="relative bg-[#0f172a] min-h-screen">
            <FloatingNav />
            <ReviewsInfo />
        </main>
    );
}
