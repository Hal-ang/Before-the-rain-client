import BackArrow from "@/assets/back_arrow.svg";
import Header from "./Header";
import { useRouter } from "next/navigation";

const BackHeader = () => {
  const router = useRouter();
  return <Header LeftIcon={<BackArrow onClick={() => router.back()} />} />;
};

export default BackHeader;
