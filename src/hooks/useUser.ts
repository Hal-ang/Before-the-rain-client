import { useAtomValue } from "jotai";
import { userAtom } from "@/atom/user";

const useUser = () => {
  return useAtomValue(userAtom);
};

export default useUser;
