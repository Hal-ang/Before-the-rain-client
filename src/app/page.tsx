import AuthGuard from "@/components/auth/AuthGuard";
import FadeTitle from "@/components/FadeTitle";
import RouterGuard from "@/components/auth/RouterGuard";

export default function HomePage() {
  return (
    <AuthGuard>
      <RouterGuard>
        <main className="min-h-screen w-full flex items-center justify-center">
          <FadeTitle text="반가워요!" />
        </main>
      </RouterGuard>
    </AuthGuard>
  );
}
