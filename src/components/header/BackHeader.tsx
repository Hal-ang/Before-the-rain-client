import BackArrow from "@/assets/back_arrow.svg";
import Header from "./Header";

const BackHeader = ({
  text,
  onPressBack
}: {
  text?: string;
  onPressBack: () => void;
}) => {
  return <Header text={text} LeftIcon={<BackArrow onClick={onPressBack} />} />;
};

export default BackHeader;
