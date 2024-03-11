import { Meta, StoryObj } from "@storybook/react";
import LargeButton from "@/components/button/LargeButton";

const meta = {
  title: "Common/LargeButton",
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
