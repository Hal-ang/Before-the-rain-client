import FadeTitle from "@/components/FadeTitle";
import RouterGuard from "@/components/auth/RouterGuard";

export default function HomePage() {
  return (
    <RouterGuard>
      <main className="min-h-screen w-full flex items-center justify-center">
        <FadeTitle text="반가워요!" />
      </main>
    </RouterGuard>
  );
}
