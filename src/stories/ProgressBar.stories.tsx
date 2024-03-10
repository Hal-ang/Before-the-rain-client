import { Meta, StoryObj } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import ProgressBar from "@/components/ProgressBar";

const meta = {
  title: "Progressbar",
  component: ProgressBar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <StoryLayout className="px-20pxr">
        <Story />
      </StoryLayout>
    )
  ]
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ZeroPercent: Story = {
  args: {
    percent: 0
  }
};

export const HalfPercent: Story = {
  args: {
    percent: 50
  }
};

export const HundredPercent: Story = {
  args: {
    percent: 100
  }
};
