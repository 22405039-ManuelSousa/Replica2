import ShoppingCart from "@/components/ShoppingCart";
import FloatingNav from "@/components/FloatingNav";

export default function CartPage() {
    return (
        <main className="relative bg-[#0f172a] min-h-screen">
            <FloatingNav />
            <ShoppingCart />
        </main>
    );
}
