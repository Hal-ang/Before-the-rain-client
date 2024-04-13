import BackArrow from "@/assets/back_arrow.svg";
import Header from "./Header";
import { useRouter } from "next/navigation";

const BackHeader = ({
  text,
  onPressBack
}: {
  text?: string;
  onPressBack?: () => void;
}) => {
  const router = useRouter();
  return (
    <Header
      text={text}
      LeftIcon={<BackArrow onClick={onPressBack ?? (() => router.back())} />}
    />
  );
};

export default BackHeader;
