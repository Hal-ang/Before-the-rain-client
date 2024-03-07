import { useState } from "react";

export interface FocusBind {
  onFocus: () => void;
  onBlur: () => void;
}
const useFocused = () => {
  const [isFocused, setIsFocused] = useState(false);

  return {
    isFocused,
    bind: {
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false)
    } as FocusBind
  };
};

export default useFocused;
