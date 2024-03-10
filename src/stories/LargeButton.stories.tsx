import CheckBox from "@/components/button/CheckBox";

import { Meta, StoryObj } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import { useArgs } from "@storybook/preview-api";
import LargeButton from "@/components/button/LargeButton";

const meta = {
  title: "LargeButton",
  component: LargeButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />]
} satisfies Meta<typeof LargeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "큰 버튼"
  }
};
