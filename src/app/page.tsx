import FadeTitle from "@/components/FadeTitle";
import Flex from "@/components/Flex";
import RouterGuard from "@/components/auth/RouterGuard";

export default function HomePage() {
  return (
    <RouterGuard>
      <Flex
        as="main"
        justify="center"
        align="center"
        className="min-h-screen w-full"
      >
        <FadeTitle text="반가워요!" />
      </Flex>
    </RouterGuard>
  );
}
