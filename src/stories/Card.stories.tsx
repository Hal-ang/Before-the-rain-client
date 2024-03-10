import { Meta, StoryObj } from "@storybook/react";

import { LinearButton } from "@/components/button/LinearButton";
import { CardLayout } from "@/components/layout/card";

const meta = {
  title: "Layout/Card",
  // @ts-ignore
  component: CardLayout,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    children: (
      <div style={{ color: "transparent" }}>
        아하하하하아하하하하아하하하하아하하하하아하하하하아하하하하아하하하하
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ width: 150 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof CardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    state: "dark"
  }
};

export const DarkOutline: Story = {
  args: {
    state: "dark-outline"
  }
};
