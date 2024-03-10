import { Meta, StoryObj } from "@storybook/react";

import { LinearButton } from "@/components/button/LinearButton";
import LargeInput from "@/components/input/LargeInput";

const meta = {
  title: "LargeInput",
  // @ts-ignore
  component: LargeInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LinearButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "00"
  }
};
