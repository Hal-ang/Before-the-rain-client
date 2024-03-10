import CheckBox from "@/components/button/CheckBox";

import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { LinearButton } from "@/components/button/LinearButton";

const meta = {
  title: "LinearButton",
  component: LinearButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    children: "둥근 버튼"
  }
} satisfies Meta<typeof LinearButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: "primary"
  }
};

export const Secondary: Story = {
  args: {
    state: "secondary"
  }
};

// export const Unchecked: Story = {
//   args: {
//     checked: true,
//     label: "낮",
//     desc: "테스트테스트테스트테스트테스트테스트"
//   }
// };

// export const CheckedWithoutDesc: Story = {
//   args: {
//     checked: true,
//     label: "아침"
//   }
// };

// export const UncheckedWithoutDesc: Story = {
//   args: {
//     checked: true,
//     label: "낮"
//   }
// };
