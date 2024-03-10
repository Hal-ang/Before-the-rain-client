import { Meta, StoryObj } from "@storybook/react";

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
