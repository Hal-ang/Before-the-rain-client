import BackArrow from "@/assets/back_arrow.svg";
import Header from "./Header";
import { useRouter } from "next/navigation";

const BackHeader = ({ text }: { text?: string }) => {
  const router = useRouter();
  return (
    <Header
      text={text}
      LeftIcon={<BackArrow onClick={() => router.back()} />}
    />
  );
};

export default BackHeader;
