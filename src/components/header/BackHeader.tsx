import BackArrow from "@/assets/back_arrow.svg";
import Header from "./Header";

const BackHeader = ({ onClickBack }: { onClickBack: () => void }) => {
  return <Header LeftIcon={<BackArrow onClick={onClickBack} />} />;
};

export default BackHeader;
