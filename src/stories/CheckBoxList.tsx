import React, { useState } from "react";

import CheckBox from "@/components/button/CheckBox";

const CheckBoxList = ({
  list
}: {
  list: { label: string; desc: string }[];
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  return (
    <div
      style={{ gap: 15, padding: 20 }}
      className="w-full flex flex-col items-center"
    >
      {list.map((item) => (
        <CheckBox
          key={item.label}
          label={item.label}
          desc="09:00 ~ 18:00"
          onClick={() =>
            setCheckedItems((prev) => {
              if (prev.includes(item.label)) {
                return prev.filter((el) => el !== item.label);
              }
              return [...prev, item.label];
            })
          }
          checked={checkedItems.includes(item.label)}
        />
      ))}
    </div>
  );
};

export default CheckBoxList;
